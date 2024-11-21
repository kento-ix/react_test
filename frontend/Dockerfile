# ベースイメージとしてNode.jsを使用
FROM node:18

# 作業ディレクトリを作成
WORKDIR /app

# パッケージ管理のために必要なファイルをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# アプリのソースコードをコピー
COPY . .

# アプリをビルド（開発環境用）
RUN npm run build

# コンテナ起動時に実行するコマンド
CMD ["npm", "start"]

# ポートを公開
EXPOSE 3000
