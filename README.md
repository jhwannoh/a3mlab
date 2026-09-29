# A³Mlab 홈페이지

부산대학교 A³Mlab(Laboratory for AI-Accelerated, Automated Design of Materials) 홈페이지입니다.

## 파일 구성

- `index.html` : 페이지 뼈대 (수정할 일 거의 없음)
- `content.js` : 연구실 소개, 연구 분야, 모집 안내 문구 (영어 `en` / 한국어 `kr`)
- `publications.js` : 논문 목록 (새 논문은 배열 맨 앞에 추가, 연도별 정렬은 자동)
- `style.css` : 색·글꼴 (맨 위 `:root` 변수만 바꾸면 전체 반영)
- `app.js` : 화면 조립 코드 (수정할 필요 없음)
- `images/` : 사진 폴더 (교수 사진은 `images/professor.jpg`)
- `.nojekyll`, `robots.txt` : 게시 설정 파일 (삭제하지 마세요)

## 게시 방법 (GitHub Pages)

1. 저장소 이름을 `아이디.github.io`로 만들고 Public으로 설정
2. 이 폴더 안의 파일을 저장소 최상위에 업로드 (`index.html`이 맨 위에 있어야 함)
3. Settings → Pages → Source: Deploy from a branch, Branch: `main` / `(root)` → Save
4. 1~2분 뒤 `https://아이디.github.io` 에서 확인

## 수정 방법

저장소에서 파일을 열고 연필 아이콘으로 수정한 뒤 Commit changes를 누르면 1~2분 뒤 반영됩니다.

### 새 논문 추가 (`publications.js`)

```
 {
  "title": "논문 제목",
  "authors": "저자",
  "venue": "저널 권(호), 페이지",
  "year": 2027,
  "url": "https://doi.org/..."
 },
```

위 형식을 `const PUBLICATIONS = [` 바로 아래에 붙여 넣습니다.

## 주의

공개 저장소는 파일 원본과 수정 기록을 누구나 볼 수 있습니다. 전화번호, 학번 등 개인정보는 적지 마세요.
이메일은 `content.js`에 아이디와 도메인을 나눠 적으며, 방문자가 버튼을 누를 때만 주소가 표시됩니다.
