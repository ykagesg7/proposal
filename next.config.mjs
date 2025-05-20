/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pagesのリポジトリ名がルートでない場合は、以下のようにbasePath設定が必要
  // 例: リポジトリ名が 'schoo-proposal' の場合
  // basePath: '/schoo-proposal',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
