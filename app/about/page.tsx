/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';
import { typography } from '@/styles/typography';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '소개',
};

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="text-white">
      <HeroSection />
      <IntroduceSection />
      <LoginSection />
      <HowToSection />
      <RecommendedSection />
      <FAQSection />
      <VideoSection />
      <Footer />
    </div>
  );
}

function HeroSection(): React.JSX.Element {
  return (
    <section className="h-screen w-full bg-white">
      <div className="h-full w-full p-12.5 pt-17">
        <div className="flex h-full flex-col items-center rounded-15 bg-primary-400">
          <h1
            className={cn(typography({ scale: 'head-1' }), 'mt-11 text-center')}
          >
            요약부터 아카이빙까지 한번에
          </h1>
          <p
            className={
              (cn(typography({ scale: 'body-2' })), 'mt-1 text-center')
            }
          >
            Someup!을 통해 당신만의 요약본을 몇초만에 만들어보세요!{' '}
          </p>
          <img
            src="/images/hero-image.png"
            width={900}
            alt="썸업 소개"
            className="mt-3"
          />
          <Link href="/">
            <img
              src="/images/cta-button.png"
              alt="메인 페이지로 이동"
              width={361}
              height={104}
            />
            <span className="sr-only">Get Started</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function IntroduceSection(): React.JSX.Element {
  return (
    <section className="w-full bg-primary-400">
      <div className="flex h-full items-center py-64">
        <div>
          <img
            src="/images/service-preview-1.png"
            width={1037}
            height={575}
            alt="요약본 예시"
          />
        </div>
        <div className="mx-auto">
          <h2 className={cn(typography({ scale: 'head-1' }), 'mt-18')}>
            더 빠르게 요약하고 보관하세요
          </h2>
          <p className={(cn(typography({ scale: 'title-2' })), 'mt-8')}>
            URL을 입력하고, 수정하여 아카이빙 하세요.
            <br /> 당신만의 맞춘 AI 요약 아카이빙 서비스입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function LoginSection(): React.JSX.Element {
  return (
    <section className="w-full overflow-hidden bg-primary-300">
      <div className="flex h-full flex-col items-center">
        <h2
          className={cn(typography({ scale: 'head-1' }), 'pt-18 text-center')}
        >
          로그인 후 더 많은 기능을 이용하세요
        </h2>
        <p
          className={(cn(typography({ scale: 'title-2' })), 'mt-8 text-center')}
        >
          Someup은 로그인 유저를 위한 맞춤 요약,
          <br /> 수정 및 저장 기능을 제공하고 있습니다
        </p>
        <img
          src="/images/service-preview-2.png"
          width={1792}
          height={992}
          alt="맞춤 요약하는 방법"
        />
      </div>
    </section>
  );
}

function HowToSection(): React.JSX.Element {
  return (
    <section className="w-full bg-[#EDEEFF]">
      <div className="flex flex-col items-center">
        <div className="mt-21 flex items-center gap-4">
          <img
            src="/login_logo.png"
            alt="썸업 로고"
            width={500}
            height={200}
            className="w-50"
          />
          <h2 className="text-center text-[40px] font-semibold leading-1.3 tracking-normal text-gray-800">
            <span className="sr-only">썸업</span>이용 방법
          </h2>
        </div>
        <div className="mt-20 flex gap-49">
          <div className="ml-12 grid max-w-80 grid-cols-[32px_1fr] gap-x-14">
            <div className="relative flex min-h-37">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary-300" />
              <span
                className={cn(
                  typography({ scale: 'body-4' }),
                  'z-0 flex h-7.5 w-7.5 items-center justify-center rounded-full border-2 border-primary-300 bg-[#EDEEFF] text-primary-300',
                )}
              >
                1
              </span>
            </div>
            <div>
              <h3
                className={cn(
                  typography({ scale: 'title-2' }),
                  'text-gray-800',
                )}
              >
                로그인하기
              </h3>
              <p
                className={cn(typography({ scale: 'body-6' }), 'text-gray-600')}
              >
                Someup은 모두에게 URL 요약 서비스를 제공합니다 로그인 유저만이
                누릴 수 있는 수정 및 아카이빙 서비스를 이용해보세요!
              </p>
            </div>

            <div className="relative flex min-h-37">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary-300" />
              <span
                className={cn(
                  typography({ scale: 'body-4' }),
                  'z-0 flex h-7.5 w-7.5 items-center justify-center rounded-full border-2 border-primary-300 bg-[#EDEEFF] text-primary-300',
                )}
              >
                2
              </span>
            </div>
            <div>
              <h3
                className={cn(
                  typography({ scale: 'title-2' }),
                  'text-gray-800',
                )}
              >
                URL 입력
              </h3>
              <p
                className={cn(typography({ scale: 'body-6' }), 'text-gray-600')}
              >
                입력 창에 URL을 입력하세요! 당신만의 요약본이 만들어집니다
              </p>
            </div>
            <div className="relative flex min-h-37">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary-300" />
              <span
                className={cn(
                  typography({ scale: 'body-4' }),
                  'z-0 flex h-7.5 w-7.5 items-center justify-center rounded-full border-2 border-primary-300 bg-[#EDEEFF] text-primary-300',
                )}
              >
                3
              </span>
            </div>
            <div>
              <h3
                className={cn(
                  typography({ scale: 'title-2' }),
                  'text-gray-800',
                )}
              >
                AI 요약본 아카이빙
              </h3>
              <p
                className={cn(typography({ scale: 'body-6' }), 'text-gray-600')}
              >
                생성된 요약글을 내가 원하는대로 수정하고 원하는 아카이브에
                분류하여 보관하세요 마음에 들지 않으면 재요약하세요!
              </p>
            </div>
            <div className="relative flex min-h-37">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary-300" />
              <span
                className={cn(
                  typography({ scale: 'body-4' }),
                  'z-0 flex h-7.5 w-7.5 items-center justify-center rounded-full border-2 border-primary-300 bg-[#EDEEFF] text-primary-300',
                )}
              >
                4
              </span>
            </div>
            <div>
              <h3
                className={cn(
                  typography({ scale: 'title-2' }),
                  'text-gray-800',
                )}
              >
                아카이브 탐색
              </h3>
              <p
                className={cn(typography({ scale: 'body-6' }), 'text-gray-600')}
              >
                아카이브 내에서 검색하고 생성하고 탐색하세요 당신의 수많은
                웹사이트 요약본들이 저장되어 있습니다
              </p>
            </div>
            <div className="relative flex min-h-37">
              <span
                className={cn(
                  typography({ scale: 'body-4' }),
                  'z-0 flex h-7.5 w-7.5 items-center justify-center rounded-full border-2 border-primary-300 bg-[#EDEEFF] text-primary-300',
                )}
              >
                5
              </span>
            </div>
            <div>
              <h3
                className={cn(
                  typography({ scale: 'title-2' }),
                  'text-gray-800',
                )}
              >
                요약본 확인 및 수정
              </h3>
              <p
                className={cn(typography({ scale: 'body-6' }), 'text-gray-600')}
              >
                저장된 맞춤 요약본들을 읽으세요! 중요한 정보들을 리마인딩 할 수
                있습니다 또한, 재수정하고 메모를 남겨보세요
              </p>
            </div>
          </div>
          <img
            src="/images/service-preview-3.png"
            width={620}
            height={426}
            alt="썸업 이용 방법"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function RecommendedSection(): React.JSX.Element {
  return (
    <section className="w-full bg-[#EDEEFF] pb-24">
      <div className="flex flex-col items-center">
        <h2
          className={cn(
            typography({ scale: 'title-1' }),
            'mt-6 text-center text-primary-300',
          )}
        >
          이런분들께 추천합니다!
        </h2>
        <div className="mt-10.5 flex gap-16">
          <div className="h-[340px] w-full max-w-80 overflow-hidden rounded-7.5 bg-card-1">
            <h3 className="mx-6 my-2.5 text-[32px] font-semibold leading-1.4">
              Developer
            </h3>
            <p className="mx-6 my-3 text-xs leading-1.5">
              기술 문서를 빠르게 요약하고 보관하여 쉽게 찾아볼 수 있습니다.기술
              트렌드를 따라가기 위한 다양한 기술 뉴스와 블로그를 요약해 시간과
              노력을 절약할 수 있습니다.
            </p>
          </div>
          <div className="h-[340px] w-full max-w-80 overflow-hidden rounded-7.5 bg-card-1">
            <h3 className="mx-6 my-2.5 text-[32px] font-semibold leading-1.4">
              Student
            </h3>
            <p className="mx-6 my-3 text-xs leading-1.5">
              방대한 양의 학습자료와 논문을 쉽게 요약할 수 있습니다. 쉽고 빠른
              요약으로 시험 공부와 더 많은 학습에 필요한 핵심정보를 체계적으로
              정리할 수 있습니다.
            </p>
          </div>
          <div className="h-[340px] w-full max-w-80 overflow-hidden rounded-7.5 bg-card-1">
            <h3 className="mx-6 my-2.5 text-[32px] font-semibold leading-1.4">
              Creator
            </h3>
            <p className="mx-6 my-3 text-xs leading-1.5">
              웹 상의 다양한 자료를 요약해 참고 자료를 빠르게 확보하고,콘텐츠의
              기획에 반영할 수 있습니다. 또한, 최신 트렌드를 빠르게 따라가기
              위한 정보를 놓치지 않고 콘텐츠에 반영할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection(): React.JSX.Element {
  function QuestionBubble({ children }: { children: ReactNode }) {
    return (
      <div className="flex items-center">
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-300"
        >
          <path d="M-3.49691e-07 7L12 0.0717959L12 13.9282L-3.49691e-07 7Z" />
        </svg>

        <div
          className={cn(
            typography({ scale: 'body-4' }),
            'flex flex-col items-center gap-3 rounded-2 bg-primary-300 px-4 py-3 text-left',
          )}
        >
          {children}
        </div>
      </div>
    );
  }

  function AnswerBubble({ children }: { children: ReactNode }) {
    return (
      <div className="mt-4 flex items-start justify-end gap-2">
        <div
          className={cn(
            typography({ scale: 'body-4' }),
            'flex flex-col items-center gap-3 rounded-2 bg-white px-4 py-3 text-right text-black',
          )}
        >
          {children}
        </div>
        <img src="/logo_40.png" width={40} height={40} alt="someup logo" />
      </div>
    );
  }

  return (
    <section className="w-full bg-primary-50">
      <div className="flex flex-col items-center pb-30">
        <h2 className="mt-21 inline-block h-12 w-40 bg-doodle-circle bg-no-repeat text-center text-[40px] font-semibold leading-1.2 text-primary-500">
          FAQ
        </h2>
        <div className="mt-22 flex w-full max-w-[805px] flex-col gap-14">
          <div>
            <QuestionBubble>someup은 무료로 사용할 수 있나요?</QuestionBubble>
            <AnswerBubble>
              Someup은 로그인 한 유저에게 Someup의 모든 기능을 제공하고
              있습니다.
              <br /> 지금 바로 로그인하여 이용해보세요!
            </AnswerBubble>
          </div>
          <div>
            <QuestionBubble>
              Someup은 어떤 종류의 콘텐츠를 요약할 수 있나요?
            </QuestionBubble>
            <AnswerBubble>
              뉴스 기사, 블로그 게시물, 연구 논문, 온라인 보고서 등<br /> URL로
              접근할 수 있는 대부분의 웹 콘텐츠를 요약할 수 있습니다.
            </AnswerBubble>
          </div>
          <div>
            <QuestionBubble>요약의 길이를 조정할 수 있나요?</QuestionBubble>
            <AnswerBubble>
              사용자는 기본 요약의 길이를 짧게, 중간, 길게 선택할 수 있으며
              말투와 꼭 포함시키고 싶은 키워드,
              <br /> 요약글의 언어까지 선택하여 보다 더 디테일한 맞춤 요약
              서비스를 이용할 수 있습니다.
            </AnswerBubble>
          </div>
          <div>
            <QuestionBubble>
              요약된 내용을 그대로 재사용해도 저작권 문제가 없나요?
            </QuestionBubble>
            <AnswerBubble>
              Someup이 제공하는 서비스는 원문을 기반으로 하기 때문에 요약을
              사용하는 경우에도
              <br /> 원문에 대한 저작권을 준수해야 합니다. 요약글에도 원문 URL을
              표기하고 있으므로
              <br /> 상업적 목적으로 사용 시 원문 출처를 반드시 명시하세요.
            </AnswerBubble>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection(): React.JSX.Element {
  return (
    <section className="w-full bg-primary-100">
      <div className="flex items-center justify-center pb-34 pt-47">
        <div className="relative">
          <img
            src="/images/double-twinkle.svg"
            alt="double twinkle"
            className="absolute -left-7.5 top-16 h-40 w-40 -translate-x-full -translate-y-full"
          />
          <img
            src="/images/double-arrow.svg"
            alt="double twinkle"
            className="absolute -right-13 -top-6 -translate-y-full translate-x-full"
          />
          <video width="1009" height="575" controls className="mx-auto">
            <source src="/videos/project-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

function Footer(): React.JSX.Element {
  return (
    <footer
      className={cn(
        typography({ scale: 'body-1' }),
        'flex items-center justify-center gap-46.5 bg-primary-200 pb-35 pt-18.5',
      )}
    >
      <div className="flex gap-10.5">
        <span>Github</span>
        <address className="not-italic">
          <a href="https://github.com/Someup" className="underline">
            https://github.com/Someup
          </a>
        </address>
      </div>
      <div className="flex gap-10.5">
        <span className={cn()}>Email</span>
        <address className="not-italic">
          <a href="mailto:someup.site@gmail.com" className="underline">
            someup.site@gmail.com
          </a>
        </address>
      </div>
    </footer>
  );
}
