# Flowbase Admin Dashboard（B2B SaaS Structure Demo）

Flowbase Admin Dashboard は、マルチテナント型 B2B SaaS 管理画面の構造理解を目的として制作したフロントエンドプロジェクトです。

インターンシップで経験した HRMS およびタスク管理プロダクトにおける画面構造やユーザーフローをもとに、組織切り替え・ロール管理・画面遷移構造などを整理することを目的として作成しました。

本プロジェクトは完成したプロダクトではなく、設計理解を深めながら継続的に改善していくことを前提としたプロジェクトです。

---

## Demo

https://flowbase-five.vercel.app

認証は簡略化されており、ログイン情報の入力は不要です。

- Admin Dashboard
- Member Dashboard

を切り替えて確認できます。

---

## Project Purpose

本プロジェクトでは、見た目の作り込みよりも以下を重視しています。

- B2B SaaS における典型的なユーザーフロー理解
- ロールに応じた UI / ルーティング構造
- 状態管理を前提とした画面設計
- フロントエンドとデータ取得責務の分離

インターンで触れた実務構造を、公開可能な形で整理し直すことを目的としています。

---

## Main Features

### Multi-tenant Structure（Org Picker）

複数組織に所属するユーザーはログイン後に組織選択画面へ遷移します。

Login → Org Picker → Dashboard

選択された Workspace はアプリ全体のコンテキストとして保持されます。

---

### Role-based Navigation

Sidebar はログインユーザーのロールに応じて内容が変化します。

- Admin：管理機能を表示
- Member：個人機能のみ表示

UI表示とルーティング制御の両方でアクセスを制御しています。

---

### Dashboard Separation

Admin と Member で表示内容を明確に分離しています。

Admin Dashboard:

- Org Health Summary
- Pending Approvals
- Onboarding & Compliance
- Subscription Status
- Organization Activity

Member Dashboard:

- My Tasks
- Onboarding Status
- Personal Activity
- Documents
- Help Resources

---

### Route Guard

/admin 配下は管理者専用ルートとして制御しています。

権限のないユーザーが直接URLへアクセスした場合は Not Authorized ページへリダイレクトされます。

---

### Data Responsibility Separation

ダッシュボードデータは Next.js API Routes から取得します。

- Container：データ取得と整形
- Presentational Component：表示責務のみ

フロントエンド主体のプロトタイプから API 駆動構成へ移行することを意識しています。

---

## Tech Stack

- Next.js（App Router）
- React
- Tailwind CSS
- Zustand
- Next.js API Routes（Mock API）

---

## Future Direction

Flowbase は完成した作品ではなく、継続的に発展させていくプロジェクトです。

今後予定している改善：

- 状態管理構造の見直し
- 実バックエンドとの連携
- 認証・権限制御の現実的実装
- ドメイン理解を踏まえた画面設計改善
- SaaSプロダクトとしての機能追加

設計理解を深めながら育てていくプロジェクトとして継続しています。
