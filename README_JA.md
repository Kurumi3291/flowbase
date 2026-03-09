# HRMS Admin Dashboard（小規模IT企業向け社員管理システム）

このプロジェクトは、小規模IT企業向けのHRMS（Human Resource Management System）を想定したフロントエンドアプリケーションです。

HR担当者が社員情報を管理し、社員自身も自分のプロフィール情報を確認できる社内向け管理システムを想定しています。

もともとはマルチテナント型SaaSの管理画面テンプレートをベースにしていましたが、本プロジェクトでは「組織（organization）中心」の設計から「社員（Employee）中心」のHRMS構造へリファクタリングしています。

このプロジェクトの目的は以下です。

- 社内管理システムのUI構造の理解
- role-based UI設計
- Employee中心のドメイン設計
- フロントエンドとAPI責務の分離

# デモ

https://flowbase-five.vercel.app

認証は簡略化されています。

ログイン情報の入力は不要で、以下の画面を確認できます。

- Admin Dashboard
- Employee Dashboard

# 想定している会社構成

このシステムは社員数約30人の小規模IT企業を想定しています。

## 経営

- CEO / Founder：1

## プロダクト・開発（16）

- Engineering Manager：1
- Frontend Engineer：6
- Backend Engineer：6
- QA Engineer：2

## デザイン（3）

- Lead Designer：1
- UI/UX Designer：2

## プロダクト管理（2）

- Product Manager：2

## ビジネス（5）

- Sales：3
- Marketing：2

## 管理部門（2）

- HR / People Operations：1
- Finance / Admin：1

合計：約30人

小規模IT企業ではHR担当が少人数であることが多いため、このシステムはシンプルな社員情報管理にフォーカスしています。

# ユーザー

このシステムには2種類のユーザーが存在します。

## Admin（HR担当）

HR担当者は社員情報を管理します。

できること：

- 社員一覧を見る
- 社員詳細を見る
- 社員情報を編集する
- ダッシュボードで社員全体の状況を確認する

## Employee（一般社員）

社員自身が自分の情報を確認します。

できること：

- 自分のプロフィールを見る
- 所属部署や職種を確認する
- 自分向けのダッシュボードを見る

# Employeeデータ設計

このシステムはEmployee（社員）データを中心に設計されています。

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
ここで重要なのは jobTitle と userRole を分けている点です。

例：
jobTitle: Frontend Engineer
userRole: employee


- jobTitle：会社内での職種
- userRole：システム上の権限

これにより、職種とシステム権限を独立して管理できる設計になっています。


# 主な機能

## Role-based Dashboard

ログインユーザーの role に応じて表示内容が変わります。

### Admin Dashboard

HR担当者向けに社員全体の状況を確認できます。

例：

- total employees
- active employees
- departments
- recent hires


### Employee Dashboard

社員自身のプロフィール情報を確認できます。

例：

- name
- department
- job title
- joined date
- status


# Employee管理（Admin）

管理者は以下の流れで社員情報を管理できます。
Employee List → Employee Detail → Edit Employee



## Employee List

社員一覧を表示します。

表示情報：

- name
- department
- job title
- status


## Employee Detail

社員の詳細情報を確認できます。

表示情報：

- name
- email
- department
- job title
- joined date
- status


## Edit Employee

管理者は以下の情報を編集できます。

- department
- job title
- status

現在の実装では mock update（擬似更新）となっており、ページリロード後は元のデータに戻ります。


# システム構成

本プロジェクトではフロントエンド構造の整理を重視しています。

主なポイント：

- role に応じた UI 分岐
- Employee 中心のドメイン構造
- UI とデータ取得の責務分離

データ取得は Next.js API Routes を利用した Mock API で行っています。


# 技術スタック

- Next.js（App Router）
- React
- TypeScript
- Tailwind CSS
- Zustand（状態管理）
- Next.js API Routes（Mock API）


# 今後の改善予定

今後の改善として以下を予定しています。

- 社員情報更新 API の実装
- データベースとの連携
- 認証処理の改善
- HR ダッシュボードの拡張
- オンボーディング管理機能の追加


# プロジェクトの目的

このプロジェクトは完成した HR システムではなく、設計理解を目的としたプロジェクトです。

特に以下を意識しています。

- SaaS テンプレートからドメイン設計を変更するプロセス
- 社内管理システムの UI 構造
- role-based アプリケーション設計
- Employee 中心のデータモデリング

実際の HRMS プロダクトの構造理解を深めることを目的としています。
```
