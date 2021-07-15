# tomeit

tomeit はポモドーロ・テクニックを利用したタスク管理アプリです.
こちらは最初に JavaScript で実装したものになります. 後に TypeScript で実装し直しました. → [tomeit](https://github.com/minguu42/tomeit)

## セットアップ

1. `.env` ファイルを作成する

tomeit ではユーザ認証に Firebase Authentication を利用しています.
tomeit を起動させるには以下の環境変数を設定しなければなりません.

```text
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
```

2. ローカルで実行する

以下のコマンドでローカルで実行できます.

```bash
# 依存パッケージをインストールする
$ npm i

# 開発環境で実行する
$ npm run dev
```
