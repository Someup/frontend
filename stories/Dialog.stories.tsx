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
          <div>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Description of the dialog</DialogDescription>
          </div>
          <DialogClose asChild>
            <Button variant="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
              </svg>
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="px-6">
          <p>This is Dialog for testing purpose.</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outlined">Cancel</Button>
          </DialogClose>
          <Button>Save</Button>
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
          <div>
            <DialogTitle>다이얼로그 제목</DialogTitle>
          </div>
          <DialogClose asChild>
            <Button variant="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
              </svg>
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="px-6">
          <Label htmlFor="input-test-1">라벨</Label>
          <Input placeholder="플레이스 홀더" id="input-test-1" />
        </div>
        <DialogFooter>
          <Button>버튼라벨</Button>
          <Button>버튼라벨</Button>
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

          <DialogClose asChild>
            <Button variant="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
              </svg>
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
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
                  <RadioGroupItem value="normal" id="summary-normal" />
                  <Label htmlFor="summary-normal">중간 요약 (기본값)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="brief" id="summary-brief" />
                  <Label htmlFor="summary-brief">간단 요약</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="detail" id="summary-detail" />
                  <Label htmlFor="summary-detail">상세 요약</Label>
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
                  <RadioGroupItem value="formal" id="summary-tone-formal" />
                  <Label htmlFor="summary-tone-formal">
                    공식적인 말투 (기본값)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="casual" id="summary-tone-casual" />
                  <Label htmlFor="summary-tone-casual">재치있는 말투</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cute" id="summary-tone-cute" />
                  <Label htmlFor="summary-tone-cute">귀여운 말투</Label>
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
                  <RadioGroupItem value="normal" id="summary-language-korean" />
                  <Label htmlFor="summary-language-korean">
                    한국어 (기본값)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="brief" id="summary-language-english" />
                  <Label htmlFor="summary-language-english">영어</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-2.5">
            <Label htmlFor="summary-essential">
              꼭 포함되어야 할 주요 키워드
            </Label>
            <textarea
              id="summary-essential"
              className="h-20 w-full rounded-2 border border-gray-300 p-2 outline-none ring-tertiary ring-offset-2 focus-visible:ring-2"
              placeholder="키워드를 입력하세요."
            />
          </div>
        </div>
        <DialogFooter>
          <Button>확인</Button>
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
          <button className="w-full flex-1 p-4 text-primary">확인</button>
          <DialogClose asChild>
            <button className="w-full flex-1 p-4">취소</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
