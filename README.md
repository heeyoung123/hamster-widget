# 🐹 hamster-widget

시간대에 따라 다른 모습을 보여주는 GitHub README 햄스터 위젯

[![hamster](https://hamster-widget.vercel.app/api/hamster)](https://hamster-widget.vercel.app)

> 이미지를 클릭하면 먹이통을 누를 수 있는 인터랙티브 페이지로 이동해요!

## 상태

| 상태 | 시간 (KST) |
|------|-----------|
| 💃 춤추기 | 08:00 – 20:00 (랜덤) |
| 🌰 먹기 | 08:00 – 20:00 (랜덤) |
| 😴 자기 | 20:00 – 08:00 |

## 내 README에 추가하기

```markdown
[![hamster](https://hamster-widget.vercel.app/api/hamster)](https://hamster-widget.vercel.app)
```

## 직접 배포하기

```bash
git clone https://github.com/heeyoung123/hamster-widget
cd hamster-widget
npm install
vercel --prod
```

## 기술 스택

- Next.js 16 App Router
- SVG + CSS 애니메이션 (JS 없음)
- Vercel 서버리스
