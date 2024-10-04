import Button from '@/components/ui/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import RadioGroup from '@/components/ui/RadioGroup';
import RadioGroupItem from '@/components/ui/RadioGroupItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialog> = {
  component: Dialog,

  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>정말로 탈퇴하시겠습니까?</DialogTitle>
          <DialogDescription>
            이 작업은 실행 취소할 수 없습니다.
            <br />
            계정과 모든 활동 기록이 영구적으로 삭제됩니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button size="lg">취소하기</Button>
          </DialogClose>
          <Button size="lg">탈퇴하기</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithInput: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새로운 아카이브 추가</DialogTitle>
          <DialogDescription className="sr-only">
            아카이브 제목을 입력하고 새로운 아카이브를 추가하세요!
          </DialogDescription>
        </DialogHeader>
        <div className="px-10">
          <Label htmlFor="input-test-1" className="sr-only">
            라벨
          </Label>
          <Input placeholder="플레이스 홀더" id="input-test-1" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button size="lg">확인하기</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithRadio: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md">
        <DialogHeader>
          <DialogTitle>요약 설정</DialogTitle>
          <DialogDescription>
            요약 생성 시 사용할 설정을 선택하세요.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6">
          <div className="flex flex-col gap-12">
            <div className="flex">
              <h2 className="w-20 flex-shrink-0 text-base font-semibold leading-1.5">
                요약 정도
              </h2>

              <RadioGroup
                name="summary-level"
                defaultValue="normal"
                className="grid w-full grid-cols-3 gap-0"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal">
                    중간 요약 (기본값)
                  </RadioGroupItem>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="brief">간단 요약</RadioGroupItem>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="detail">상세 요약</RadioGroupItem>
                </div>
              </RadioGroup>
            </div>
            <div className="flex">
              <h2 className="w-20 flex-shrink-0 text-base font-semibold leading-1.5">
                말투
              </h2>

              <RadioGroup
                name="summary-tone"
                defaultValue="formal"
                className="grid w-full grid-cols-3 gap-0"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="formal">
                    공식적인 말투 (기본값)
                  </RadioGroupItem>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="casual">재치있는 말투</RadioGroupItem>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cute">귀여운 말투</RadioGroupItem>
                </div>
              </RadioGroup>
            </div>
            <div className="flex">
              <h2 className="w-20 flex-shrink-0 text-base font-semibold leading-1.5">
                언어
              </h2>

              <RadioGroup
                name="summary-language"
                defaultValue="korean"
                className="grid w-full grid-cols-3 gap-0"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="normal">
                    한국어 (기본값)
                  </RadioGroupItem>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="brief">영어</RadioGroupItem>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-2.5">
            <Label htmlFor="summary-essential" size="lg">
              꼭 포함되어야 할 주요 키워드&nbsp;
              <span className="text-gray-400">(선택*)</span>
            </Label>
            <textarea
              id="summary-essential"
              className="ring-tertiary h-20 w-full rounded-2 border border-gray-300 p-2 outline-none ring-offset-2 focus-visible:ring-2"
              placeholder="키워드를 입력하세요."
            />
          </div>
        </div>
        <DialogFooter>
          <Button size="lg">확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Mobile: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs gap-2">
        <DialogHeader className="flex-col items-center">
          <DialogTitle className="w-full text-center text-base">
            제목
          </DialogTitle>
          <DialogDescription>다이얼로그 설명</DialogDescription>
        </DialogHeader>
        <div className="px-6 py-4 text-center">다이얼로그 내용</div>
        <DialogFooter className="flex-col gap-0 divide-y divide-gray-100 border-t border-gray-100 p-0">
          <button className="text-primary w-full flex-1 p-4">확인</button>
          <DialogClose asChild>
            <button className="w-full flex-1 p-4">취소</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
