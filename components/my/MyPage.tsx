"use client";

import {useCallback, useEffect, useMemo, useState} from "react";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/navigation";
import {startNewChat} from "@/lib/chatNav";

import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/Card";
import {Button} from "@/components/ui/Button";
import {Avatar, AvatarFallback} from "@/components/ui/Avatar";
import {Badge} from "@/components/ui/Badge";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/Tabs";
import {MessageCircle, User as UserIcon, Sparkles, Heart, Calendar} from "lucide-react";

const STORAGE_KEY = "selectedRoomId";

type ConsultationSession = {
  id: string;
  date: string;
  topic: string;
  status: "ACTIVE" | "LOCKED" | "ENDED" | "UNKNOWN";
  duration?: string;
};

const GENDER_OPTIONS = ["MALE", "FEMALE", "OTHER"] as const;
const MBTI_OPTIONS = [
  "ISTJ","ISFJ","INFJ","INTJ","ISTP","ISFP","INFP","INTP",
  "ESTP","ESFP","ENFP","ENTP","ESTJ","ESFJ","ENFJ","ENTJ",
] as const;

function getInitials(name?: string) {
  if (!name) return "ME";
  const trimmed = name.trim();
  return trimmed.length >= 2 ? trimmed.slice(0, 2) : trimmed;
}

function formatJoinDate(iso?: string) {
  if (!iso) return "-";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}년 ${Number(mm)}월 ${Number(dd)}일`;
}

function toYYYYMMDD(iso?: string) {
  if (!iso) return "-";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "-";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function normalizeRoom(raw: any): ConsultationSession {
  const id = String(raw?.room_id ?? raw?.id ?? raw?.roomId ?? "");
  const createdAt = raw?.created_at ?? raw?.createdAt ?? raw?.created;
  const title = raw?.title ?? raw?.topic ?? raw?.category ?? "상담";

  const s = String(raw?.status ?? "").toUpperCase();

  let status: ConsultationSession["status"] = "UNKNOWN";
  if (s === "ACTIVE") status = "ACTIVE";
  else if (s === "LOCKED") status = "LOCKED";
  else if (s === "ENDED") status = "ENDED";

  return { id, date: toYYYYMMDD(createdAt), topic: title, status };
}

function renderStatusLabel(s: ConsultationSession["status"]) {
  if (s === "ACTIVE") return "진행중";
  if (s === "LOCKED") return "한도 초과";
  if (s === "ENDED") return "종료";
  return "알 수 없음";
}

export function MyPage() {
  const router = useRouter();
  const { user } = useAuth();

  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:33333";

  const [activeTab, setActiveTab] = useState("go");
  const [deletingRoomId, setDeletingRoomId] = useState<string | null>(null);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editGender, setEditGender] = useState<string>("");
  const [editMbti, setEditMbti] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);

  const [profileGender, setProfileGender] = useState<string>("");
  const [profileMbti, setProfileMbti] = useState<string>("");

  const [rooms, setRooms] = useState<ConsultationSession[]>([]);
  const [roomsLoading, setRoomsLoading] = useState(false);
  const [roomsError, setRoomsError] = useState<string | null>(null);

  const fetchLatestProfile = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/v1/auth/me`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(`프로필 조회 실패: ${res.status}`);
      }

      const data = await res.json();
      const g = data?.gender ?? "";
      const m = data?.mbti ?? "";
      
      setProfileGender(g);
      setProfileMbti(m);
      setEditGender(g);
      setEditMbti(m);
    } catch (e: any) {
      console.error("프로필 조회 실패:", e);
    }
  }, [API_BASE]);

  useEffect(() => {
    if (!user) return;
    fetchLatestProfile();
  }, [user, fetchLatestProfile]);

  const fetchRooms = useCallback(async () => {
    if (!user) return;

    setRoomsLoading(true);
    setRoomsError(null);

    try {
      const res = await fetch(`${API_BASE}/conversation/rooms`, {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `요청 실패: ${res.status}`);
      }

      const data = await res.json();
      const list = Array.isArray(data)
        ? data
        : data?.items ?? data?.rooms ?? [];

      const mapped = (list ?? [])
        .map(normalizeRoom)
        .filter((x: ConsultationSession) => x.id);

      setRooms(mapped);
    } catch (e: any) {
      setRoomsError(e?.message ?? "상담 이력을 불러오지 못했습니다.");
    } finally {
      setRoomsLoading(false);
    }
  }, [API_BASE, user]);

  useEffect(() => {
    if (!user) return;
    fetchRooms();
  }, [user, fetchRooms]);

  const deleteRoom = useCallback(
    async (roomId: string) => {
      if (!roomId) return;

      const ok = confirm("이 상담 기록을 삭제하시겠어요?\n삭제 후에는 다시 복구할 수 없어요.");
      if (!ok) return;

      setDeletingRoomId(roomId);

      try {
        const res = await fetch(`${API_BASE}/conversation/rooms/${roomId}`, {
          method: "DELETE",
          credentials: "include",
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || `삭제 실패: ${res.status}`);
        }

        const selected = localStorage.getItem(STORAGE_KEY);
        if (selected === roomId) {
          localStorage.removeItem(STORAGE_KEY);
        }

        setRooms((prev) => prev.filter((r) => r.id !== roomId));

        alert("삭제되었습니다.");
      } catch (e: any) {
        alert(e?.message ?? "삭제 중 오류가 발생했습니다.");
      } finally {
        setDeletingRoomId(null);
      }
    },
    [API_BASE]
  );

  const totalCount = rooms.length;

  const nickname = user?.nickname ?? "사용자";
  const email = user?.email ?? "-";
  const gender = profileGender || "-";
  const mbti = profileMbti || "-";

  const createdAt = (user as any)?.created_at as string | undefined;
  const joinDateText = useMemo(() => formatJoinDate(createdAt), [createdAt]);

  function startEditProfile() {
    setEditGender(profileGender || "");
    setEditMbti(profileMbti || "");
    setIsEditingProfile(true);
  }

  function cancelEditProfile() {
    setEditGender(profileGender || "");
    setEditMbti(profileMbti || "");
    setIsEditingProfile(false);
  }

  async function saveProfile() {
    const currentGender = profileGender || "";
    const currentMbti = profileMbti || "";

    const nextGender = editGender || "";
    const nextMbti = editMbti || "";

    if (nextGender === currentGender && nextMbti === currentMbti) {
      setIsEditingProfile(false);
      return;
    }

    if (!nextGender && !nextMbti) {
      alert("성별 또는 MBTI 중 최소 1개는 선택해주세요.");
      return;
    }

    setIsSaving(true);
    try {
      const res = await fetch(
        `${API_BASE}/api/v1/account/my/profile/mbti-gender/edit`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            gender: editGender || null,
            mbti: editMbti || null,
          }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `요청 실패: ${res.status}`);
      }

      setProfileGender(nextGender);
      setProfileMbti(nextMbti);
      setIsEditingProfile(false);
      alert("저장되었습니다.");

      await fetchLatestProfile();
    } catch (e: any) {
      alert(e?.message ?? "저장 중 오류가 발생했습니다.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    // ✅ 메인 페이지와 동일한 밝은 배경
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-purple-50/30 via-pink-50/20 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* 감성적인 헤더 메시지 */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              당신의 이야기가 여기 있어요
            </div>
            {/* ✅ 선명한 그라데이션 제목 */}
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {nickname}님의 공간
            </h1>
          </div>

          {/* Profile Header */}
          <Card className="mb-8 border-0 bg-white/90 shadow-xl backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent pointer-events-none" />
            
            <CardContent className="pt-8 pb-6 relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                  <Avatar className="relative w-24 h-24 border-4 border-white shadow-xl">
                    <AvatarFallback className="bg-gradient-to-br from-purple-100 to-pink-100 text-purple-700 text-2xl font-bold">
                      {getInitials(nickname)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {nickname}
                  </h2>
                  <p className="text-gray-600 mb-6">{email}</p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-6">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <div>
                        <p className="text-xs text-gray-500">가입일</p>
                        <p className="text-sm font-semibold text-gray-900">{joinDateText}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50">
                      <Heart className="w-4 h-4 text-pink-600" />
                      <div>
                        <p className="text-xs text-gray-500">총 상담</p>
                        <p className="text-sm font-semibold text-gray-900">{totalCount}회</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-14 rounded-2xl bg-white/80 backdrop-blur-sm p-1 shadow-lg border border-gray-100">
              <TabsTrigger
                value="go"
                className="flex items-center justify-center gap-2 rounded-xl text-sm font-medium text-gray-600 transition-all
                  data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 
                  data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                상담 하러가기
              </TabsTrigger>

              <TabsTrigger
                value="history"
                className="flex items-center justify-center gap-2 rounded-xl text-sm font-medium text-gray-600 transition-all
                  data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 
                  data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                상담 이력
              </TabsTrigger>

              <TabsTrigger
                value="profile"
                className="flex items-center justify-center gap-2 rounded-xl text-sm font-medium text-gray-600 transition-all
                  data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 
                  data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                <UserIcon className="w-4 h-4" />
                프로필 정보
              </TabsTrigger>
            </TabsList>

            {/* 상담 하러가기 */}
            <TabsContent value="go" className="mt-6">
              <Card className="border-0 bg-white/90 shadow-lg backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                    새로운 대화를 시작해보세요
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    지금 마음에 맞는 주제로 AI 상담을 시작할 수 있어요.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <MessageCircle className="w-10 h-10 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      편안하게 이야기를 시작해보세요
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-md">
                      love-note는 당신의 이야기를 경청하고,
                      <br />
                      함께 생각을 정리할 준비가 되어있어요.
                    </p>

                    <Button 
                      className="px-8 py-6 text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all"
                      onClick={() => startNewChat(router, "/chat")}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      상담 시작하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 상담 이력 */}
            <TabsContent value="history" className="mt-6">
              <Card className="border-0 bg-white/90 shadow-lg backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    지난 대화들을 돌아봐요
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    지금까지 나눈 소중한 대화들이에요.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {roomsLoading ? (
                    <div className="py-16 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin" />
                      <p className="text-gray-600">불러오는 중...</p>
                    </div>
                  ) : roomsError ? (
                    <div className="py-16 text-center">
                      <p className="text-sm text-red-600 mb-4">{roomsError}</p>
                      <Button 
                        variant="outline" 
                        onClick={fetchRooms}
                        className="border-purple-300 text-purple-700 hover:bg-purple-50"
                      >
                        다시 시도
                      </Button>
                    </div>
                  ) : rooms.length === 0 ? (
                    <div className="py-16 text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                        <MessageCircle className="w-10 h-10 text-gray-400" />
                      </div>
                      <p className="text-gray-600 mb-2">아직 상담 이력이 없어요</p>
                      <p className="text-sm text-gray-500">첫 대화를 시작해보세요!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {rooms.map((session, idx) => (
                        <div
                          key={session.id}
                          className="group flex items-center justify-between p-5 border border-gray-100 rounded-2xl hover:border-purple-200 hover:shadow-md transition-all bg-white"
                          style={{
                            animation: `fade-in 0.3s ease-out ${idx * 0.05}s both`
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <MessageCircle className="w-7 h-7 text-purple-600" />
                            </div>

                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">
                                {session.topic}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {session.date}
                                {session.duration ? ` · ${session.duration}` : ""}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Badge 
                              variant="secondary"
                              className={
                                session.status === "LOCKED"
                                  ? "bg-amber-100 text-amber-800 border-amber-200"
                                  : session.status === "ENDED"
                                  ? "bg-gray-100 text-gray-700 border-gray-200"
                                  : "bg-green-100 text-green-800 border-green-200"
                              }
                            >
                              {renderStatusLabel(session.status)}
                            </Badge>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                              onClick={() => {
                                localStorage.setItem(STORAGE_KEY, session.id);
                                router.push("/chat");
                              }}
                            >
                              이어가기
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="text-gray-500 hover:text-red-600 hover:bg-red-50"
                              onClick={(e) => { 
                                e.stopPropagation(); 
                                deleteRoom(session.id); 
                              }}
                              disabled={deletingRoomId === session.id}
                            >
                              {deletingRoomId === session.id ? "삭제 중..." : "삭제"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* 프로필 정보 */}
            <TabsContent value="profile" className="mt-6">
              <Card className="border-0 bg-white/90 shadow-lg backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <UserIcon className="w-5 h-5 text-purple-600" />
                    나를 더 잘 이해하기 위한 정보
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    더 나은 상담을 위해 정보를 업데이트할 수 있어요.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        이름
                      </label>
                      <p className="p-4 rounded-xl bg-gray-50 text-gray-900 border border-gray-200">
                        {nickname}
                      </p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        이메일
                      </label>
                      <p className="p-4 rounded-xl bg-gray-50 text-gray-900 border border-gray-200">
                        {email}
                      </p>
                    </div>

                    {/* 성별 */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        성별
                      </label>

                      {!isEditingProfile ? (
                        <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                          <span className="text-gray-900">{gender}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={startEditProfile}
                            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                          >
                            수정
                          </Button>
                        </div>
                      ) : (
                        <select
                          className="w-full p-4 border border-purple-200 rounded-xl bg-white text-gray-900 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                          value={editGender}
                          onChange={(e) => setEditGender(e.target.value)}
                          disabled={isSaving}
                        >
                          <option value="">선택 안함</option>
                          {GENDER_OPTIONS.map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>

                    {/* MBTI */}
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        MBTI
                      </label>

                      {!isEditingProfile ? (
                        <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                          <span className="text-gray-900">{mbti}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={startEditProfile}
                            className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                          >
                            수정
                          </Button>
                        </div>
                      ) : (
                        <select
                          className="w-full p-4 border border-purple-200 rounded-xl bg-white text-gray-900 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                          value={editMbti}
                          onChange={(e) => setEditMbti(e.target.value)}
                          disabled={isSaving}
                        >
                          <option value="">선택 안함</option>
                          {MBTI_OPTIONS.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>

                    {/* 저장/취소 */}
                    {!isEditingProfile ? (
                      <div className="pt-4">
                        <Button 
                          onClick={startEditProfile}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
                        >
                          성별/MBTI 수정하기
                        </Button>
                      </div>
                    ) : (
                      <div className="pt-4 flex gap-3">
                        <Button 
                          onClick={saveProfile} 
                          disabled={isSaving}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
                        >
                          {isSaving ? "저장 중..." : "저장"}
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={cancelEditProfile} 
                          disabled={isSaving}
                          className="border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          취소
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}