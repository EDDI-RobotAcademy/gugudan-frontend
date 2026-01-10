"use client";

import React, { useState, Suspense, useCallback } from "react";
import SimulationSidebar from "@/components/simulation/SimulationSidebar";
import SimulationRoom from "@/components/simulation/SimulationRoom";

export default function SimulationPage() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const handleNewChatStarted = useCallback((chatId: string) => {
    console.log("[SimulationPage] handleNewChatStarted 호출", { chatId });
    setSelectedChatId(chatId);
    setRefreshKey((prev) => prev + 1);
    console.log("[SimulationPage] 상태 업데이트 완료", { chatId });
  }, []);

  return (
    <Suspense fallback={<div className="h-screen bg-white dark:bg-neutral-950" />}>
      <div className="flex h-screen bg-white dark:bg-neutral-950 overflow-hidden">
        <SimulationSidebar 
          key={refreshKey}
          selectedChatId={selectedChatId} 
          onSelectChat={(id) => {
            console.log("[SimulationPage] onSelectChat 호출", { id, currentSelectedChatId: selectedChatId });
            setSelectedChatId(id);
            // null로 설정하면 설정 화면으로 전환
            if (id === null) {
              console.log("[SimulationPage] selectedChatId를 null로 설정, 설정 화면으로 전환");
            }
          }} 
        />
        <main className="flex-1 relative flex flex-col h-full overflow-hidden border-l border-gray-100 dark:border-white/5">
          <SimulationRoom 
            initialChatId={selectedChatId} 
            onNewChatStarted={handleNewChatStarted}
          />
        </main>
      </div>
    </Suspense>
  );
}