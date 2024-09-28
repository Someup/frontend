import clientEnv from '@/lib/env/client-env';
import httpClient from '@/lib/http-client';
import {
  GetPostResponse,
  RequestPostBody,
  RequestPostResponse,
  UpdatePostBody,
} from '@/types/post-types';

/**
 * 임시 게시글 생성 (요약 요청)
 */
export async function createPost({
  url,
  options,
}: RequestPostBody): Promise<number> {
  try {
    const response = await fetch(`${clientEnv.NEXT_PUBLIC_API_BASE_URL}/post`, {
      method: 'POST',
      body: JSON.stringify({ url, options }),
    });

    if (!response.ok) {
      if (response.status === 400) {
        const errorData = await response.json();
        throw new Error(`${errorData.message} || Unauthorized`);
      }
      if (response.status === 401) {
        const errorData = await response.json();
        throw new Error(`${errorData.message} || Bad Request`);
      }
      throw new Error('Failed to create post');
    }

    const data: RequestPostResponse = await response.json();
    return data.postId;
  } catch (error) {
    console.error('Error creating post:', error);
    throw new Error('Failed to create post');
  }
}

// 테스트용 더미 데이터
// const dummy_summary = {
//   tagList: ['1', '2', '3'],
//   title: '마크다운 완벽 활용 가이드',
//   url: 'https://www.markdownguide.org/basic-syntax/',
//   content:
//     '### 마크다운 완벽 활용 가이드\n\n마크다운(Markdown)은 간결하고 직관적인 문법을 통해 HTML 문서를 쉽게 작성할 수 있는 문서 작성 언어입니다. 이 글에서는 마크다운의 주요 기능들을 블로그 글 형식으로 설명해드리겠습니다.\n\n---\n\n### 1. 헤딩(Heading)\n마크다운에서 제목을 작성할 때는 `#`을 사용합니다. `#`의 개수에 따라 제목의 레벨을 설정할 수 있습니다.\n\n# H1 제목\n## H2 제목\n### H3 제목\n#### H4 제목\n##### H5 제목\n###### H6 제목\n\n---\n\n### 2. 문단과 줄바꿈\n\n문단 사이에는 빈 줄을 추가하면 됩니다. 줄을 바꾸고 싶을 때는 문장 끝에 두 칸의 공백을 추가하세요.\n\n이것은 첫 번째 문장입니다.\n\n이것은 두 번째 문장입니다.  \n줄 바꿈을 추가한 문장입니다.\n\n---\n\n### 3. 강조 (Bold, Italic)\n\n텍스트를 강조할 때는 `*` 또는 `_`을 사용합니다.\n\n- *기울임(Italic)*: 단어 앞뒤에 `*` 또는 `_` 한 개를 씁니다.\n- **굵게(Bold)**: 단어 앞뒤에 `**` 또는 `__` 두 개를 씁니다.\n- ***기울임과 굵게(Bold + Italic)***: `***` 또는 `___`을 사용하면 됩니다.\n\n*이탤릭체* 또는 _이탤릭체_  \n**볼드체** 또는 __볼드체__  \n***이탤릭+볼드*** 또는 ___이탤릭+볼드___\n\n---\n\n### 4. 리스트 (Lists)\n\n#### 순서가 있는 리스트\n순서가 있는 리스트는 숫자 뒤에 `.`을 추가하여 작성합니다.\n\n1. 첫 번째 아이템\n2. 두 번째 아이템\n3. 세 번째 아이템\n\n#### 순서가 없는 리스트\n순서가 없는 리스트는 `-`, `+`, `*` 중 하나를 사용합니다.\n\n- 첫 번째 아이템\n- 두 번째 아이템\n  - 두 번째 아이템의 하위 항목\n- 세 번째 아이템\n\n---\n\n### 5. 링크 (Links)\n\n링크는 `[텍스트](URL)` 형식으로 작성합니다.\n\n[Google로 이동](https://www.google.com)\n\n---\n\n### 6. 이미지 (Images)\n\n이미지는 `![대체 텍스트](이미지 URL)` 형식으로 작성합니다.\n\n![마크다운 로고](https://markdown-here.com/img/icon256.png)\n\n---\n\n### 7. 코드 블록 (Code Block)\n\n#### 인라인 코드\n백틱(`)을 사용해 인라인 코드를 작성할 수 있습니다.\n\n여기에 `코드`가 들어갑니다.\n\n#### 여러 줄 코드 블록\n여러 줄의 코드는 백틱 세 개(```)로 감싸서 작성합니다. 언어를 지정할 수도 있습니다.\n\n```javascript\nfunction helloWorld() {\n  console.log("Hello, world!");\n}\n```\n\n---\n\n### 8. 인용구 (Blockquote)\n\n인용구는 `>` 기호로 작성합니다.\n\n> "이것은 인용된 문장입니다."\n\n---\n\n### 9. 수평선 (Horizontal Line)\n\n세 개 이상의 `-`, `*`, `_`을 사용하면 수평선을 만들 수 있습니다.\n\n---\n***\n___\n\n---\n\n### 10. 체크리스트 (Task List)\n\n체크리스트는 `- [ ]` (미완료) 또는 `- [x]` (완료)를 사용하여 작성합니다.\n\n- [x] 첫 번째 작업 완료\n- [ ] 두 번째 작업 미완료\n- [ ] 세 번째 작업 미완료\n\n---\n\n### 11. 테이블 (Tables)\n\n파이프(`|`)와 대시(`-`)를 사용해 테이블을 작성할 수 있습니다.\n\n| 제목1 | 제목2 | 제목3 |\n| ----- | ----- | ----- |\n| 데이터1 | 데이터2 | 데이터3 |\n| 데이터4 | 데이터5 | 데이터6 |\n\n---\n\n### 12. 이모지 (Emojis)\n\n마크다운에서는 `:이모지_이름:` 형식으로 이모지를 삽입할 수 있습니다. [이모지 목록](https://www.webfx.com/tools/emoji-cheat-sheet/)을 참고하세요.\n\n이모지를 추가해보세요! :smile: :thumbsup:',
// };

/**
 * 게시글 보기
 */
export async function fetchPost(id: string): Promise<GetPostResponse> {
  try {
    const response = await fetch(
      `${clientEnv.NEXT_PUBLIC_API_BASE_URL}/post/${id}`,
    );

    if (!response.ok) {
      if (response.status === 400) {
        const errorData = await response.json();
        throw new Error(`${errorData.message || 'Bad Request'}`);
      }
      if (response.status === 401) {
        const errorData = await response.json();
        throw new Error(`${errorData.message || 'Unauthorized'}`);
      }
      throw new Error('Failed to fetch summary');
    }

    const data: GetPostResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching summary:', error);
    throw new Error('Failed to fetch summary');
  }
}

/**
 * 게시글 수정하기, 요약 저장하기 (PATCH)
 */
export async function updatePost(
  id: string,
  body: UpdatePostBody,
): Promise<void> {
  await httpClient.patch<void>(`/post/${id}`, body);
}
