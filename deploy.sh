#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
npm run build

# �������ɵ��ļ���
cd docs/.vuepress/dist

#����.nojekyll ��ֹGithub Pages build����
touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f "https://${access_token}@github.com/chenxikry/dataCom.git" master:gh-pages

cd -
