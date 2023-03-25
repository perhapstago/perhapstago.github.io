# #!/usr/bin/env sh

# # 确保脚本抛出遇到的错误
# set -e


# push_addr=`git remote get-url --push origin` # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
# commit_info=`git describe --all --always --long`
# dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
# push_branch=master # 推送的分支

# # 生成静态文件
# npm run build

# # 进入生成的文件夹
# cd $dist_path

# git init
# git add -A
# git commit -m "deploy, $commit_info"
# git push -f $push_addr HEAD:$push_branch

# cd -
# rm -rf $dist_path


#!/usr/bin/env sh# 发生错误时停止
set -e
git init
git add -A
git commit -m 'init'
git config --local user.name ""
git config --local user.email {email}
# 如果部署到 https://perhapstago.github.io
# git push -f git@github.com:perhapstago/perhapstago.github.io.git master:origin/master
# 如果部署到 https://perhapstago.github.io/
git push -f git@github.com:perhapstago/perhapstago.git master
cd -
