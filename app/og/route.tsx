import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Love-Note';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'default';

    // 폰트 로드 (한글 지원)
    // 실제 배포 시에는 폰트 파일을 추가하거나 시스템 폰트 사용
    const fontData = await fetch(
      new URL('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap')
    ).then((res) => res.text());

    if (type === 'mbti-default') {
      return new ImageResponse(
        (
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #9333EA 0%, #EC4899 100%)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: 28,
                  background: 'rgba(255, 255, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 70,
                  backdropFilter: 'blur(10px)',
                }}
              >
                💝
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 64,
                fontWeight: 700,
                color: 'white',
                marginBottom: 20,
                textAlign: 'center',
                lineHeight: 1.2,
              }}
            >
              <div style={{ display: 'flex' }}>MBTI 기반으로 이야기를 나누고</div>
              <div style={{ display: 'flex' }}>대화를 정리해가는 서비스</div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 36,
                color: 'rgba(255, 255, 255, 0.9)',
                textAlign: 'center',
                maxWidth: 900,
                lineHeight: 1.4,
              }}
            >
              <div style={{ display: 'flex' }}>결혼, 연애, 썸에서 자주 생기는 흐름과</div>
              <div style={{ display: 'flex' }}>대화 포인트를 정리했어요</div>
            </div>

            <div
              style={{
                display: 'flex',
                fontSize: 32,
                color: 'rgba(255, 255, 255, 0.8)',
                marginTop: 40,
                fontWeight: 400,
              }}
            >
              {SITE_NAME}
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      );
    }

    // default 타입 (메인, FAQ, Inquiry)
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #9333EA 0%, #EC4899 100%)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: 28,
                background: 'rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 70,
                backdropFilter: 'blur(10px)',
              }}
            >
              💌
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 80,
              fontWeight: 700,
              color: 'white',
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            {SITE_NAME}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 40,
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            <div style={{ display: 'flex' }}>MBTI 기반으로 이야기를 나누고</div>
            <div style={{ display: 'flex' }}>대화를 정리해가는 AI 서비스</div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.8)',
              marginTop: 30,
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            <div style={{ display: 'flex' }}>대화 맥락에서 공감해주고 소통하며</div>
            <div style={{ display: 'flex' }}>결혼, 연애, 썸의 대화를 정리해요</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
