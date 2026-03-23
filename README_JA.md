# Flowbase HRMS（小規模IT企業向け社員管理システム）

Flowbaseは、約30名規模の小規模IT企業を想定したHRMS（Human Resource Management System）です。

管理者（HR担当）が社員情報を管理し、社員自身も自分のプロフィールを確認できる社内向けシステムとして設計されています。

本プロジェクトは、**CRUD機能・API設計・データベース連携**を中心に、実務に近い管理画面の構築を目的としています。

---

## デモ

https://flowbase-five.vercel.app

認証は簡略化されており、ログイン時に role を選択することで以下の画面を確認できます。

- Admin Dashboard
- Employee Dashboard

---

## 想定している会社構成

本システムは約30人規模のプロダクト企業を想定しています。

### 部署構成

- Engineering：10名
- Design：3名
- Product：3名
- HR：3名
- Sales：2名
- Marketing：2名
- Customer Support：2名
- Finance：2名
- Operations：2名

合計：約30名

---

## ユーザー

### Admin（HR担当）

社員情報を管理するユーザー。

- 社員一覧の閲覧
- 社員詳細の確認
- 社員の新規作成
- 社員情報の編集
- 社員の削除

---

### Employee（一般社員）

自分の情報を確認するユーザー。

- 自分のプロフィール確認
- 所属部署・職種の確認
- ダッシュボードの閲覧

---

## Employeeデータ設計

```ts
type Employee = {
  id: string
  name: string
  email: string
  department: string
  jobTitle: string
  joinedDate: string
  status: 'active' | 'inactive'
  userRole: 'admin' | 'employee'
}

## 設計ポイント

- jobTitle：会社内での職種
- userRole：システム上の権限

職種とアクセス権限を分離することで、柔軟なユーザー管理を可能にしています。
```
