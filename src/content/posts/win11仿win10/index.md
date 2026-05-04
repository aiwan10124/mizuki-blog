---
title: win11仿win10
published: 2026-05-05
pinned: false
description: win11如何仿win10
tags: [主题, win11仿win10]
category: 主题
author: aiwan10124
draft: false
date: 2026-05-04
image: "img0.jpg"
pubDate: 2026-05-04
---

视频教程:[b站链接](https://www.bilibili.com/video/BV1pyRvBrEJq)

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=116515047211681&bvid=BV1pyRvBrEJq&cid=38080284209&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="468"></iframe>

# win11仿win10

## 1.视频中所需要文件的下载链接

### 1.[123云盘win11仿win10.zip](https://1826803333.share.123865.com/123pan/Ljhrjv-vRso) 2.[旧版组件](https://win7games.com/)

## 2.替换系统图标

### 1.备份原来的系统图标

1.打开目录C:\Windows\SystemResources

2.复制shell32.dll.mun zipfldr.dll.mun imageres.dll.mun，复制到文件夹win11替换win10图标的file1文件夹

### 2.替换图标

1.右键以管理员身份运行1_一键替换win10图标-右键管理员运行.cmd

![QQ20260504-211501](img/QQ20260504-211501.png)

## 3.替换系统音效

### 1.备份原来系统音效

1.打开C:\Windows\Media目录，将音频文件保存到某个位置

### 2.删除所有音效

1.打开提权工具

![QQ20260504-211822](img/QQ20260504-211822.png)

2.勾选启用全部特权，将删media.exe拖入运行

![QQ20260504-212027](img/QQ20260504-212027.png)

### 3.导入音效

1.打开C:\Windows\Media。将文件夹中的Media.zip中的文件解压到里面去

![QQ20260504-212238](img/QQ20260504-212238.png)

## 4.更改开机图标，开机就是品牌Logo不用做，但要导入InstallTakeOwnership.reg

1.安装提权工具，打开文件夹中的Take Ownership文件夹，导入InstallTakeOwnership.reg

![QQ20260504-212536](img/QQ20260504-212536.png)

2.打开C:\Windows\Boot目录，右键Resources文件夹，点击刚才导入注册表所出现的右键菜单选项。

![QQ20260504-212723](img/QQ20260504-212723.png)

3.打开Resources文件夹，将bootres.dll重命名，然后将文件夹中的bootres.dll复制过去

## 5.恢复win10资源管理器样式

### 1.恢复win10任务栏

1.打开文件夹中的ep_setup.exe

![QQ20260504-213543](img/QQ20260504-213543.png)

2.右键任务栏点击属性

![QQ20260504-213746](img/QQ20260504-213746.png)

3.调整设置

任务栏风格选择Windows 10(ExplorerPatcher)

![QQ20260504-213926](img/QQ20260504-213926.png)

开始菜单风格选择windows10，显示位置屏幕边缘

![QQ20260504-213940](img/QQ20260504-213940.png)

窗口切换器选择windows10

![QQ20260504-213953](img/QQ20260504-213953.png)

禁用窗口圆角

![QQ20260504-214004](img/QQ20260504-214004.png)

语言切换选择windows10无动画

![QQ20260504-214016](img/QQ20260504-214016.png)

重启资源管理器

![QQ20260504-214024](img/QQ20260504-214024.png)

### 2.恢复资源管理器样式

1.导入文件夹中的win10.reg，然后运行restart explorer.bat



![QQ20260504-214624](img/QQ20260504-214624.png)

2.资源管理器如果显示不正常重新运行替换图标即可

![QQ20260504-214708](img/QQ20260504-214708.png)

## 6.安装旧版组件

[下载链接 ](https://win7games.com/) 根据自己需求下载即可，除了win10任务栏管理器，其他都可以下载。后面有其他办法运行win10任务栏管理器

### 1.记事本和画图安装方法

1.打开安装包下一步，直到来到这个界面，打开设置

![QQ20260504-215411](img/QQ20260504-215411.png)

2.关闭应用执行别名

![QQ20260504-215536](img/QQ20260504-215536.png)

关闭这三个

![QQ20260504-215606](img/QQ20260504-215606.png)

然后无脑下一步。画图只需要点击打开设置然后关掉下一步即可

## 7.恢复旧版win10任务栏管理器

1.打开安装包无脑下一步

![QQ20260504-215832](img/QQ20260504-215832.png)

2.打开C:\Windows\System32右键taskmgr.exe提权，然后重命名。然后打开刚才安装的安装目录将taskmgr10.exe复制过去并且更改为taskmgr.exe

3.汉化软件，将我文件夹中的zh-CN复制到软件目录即可

# 恢复教程

## 1.卸载之前安装过的旧版组件

1.在控制面板中卸载所有之前安装过的旧版组件

2.打开设置点击应用点击高级应用设置点击应用执行别名，开启刚才关闭的。

![QQ20260505-065130](img/QQ20260505-065130.png)

3.打开C:\Windows\System32目录，找到taskmgr.exe删除，并把你原来的taskmgr.exe的名称改回去。

## 2.恢复资源管理器

### 1.恢复任务栏

1.右键任务栏，点击属性，然后点击卸载

![QQ20260505-065558](img/QQ20260505-065558.png)

2.右键任务栏点击任务栏设置，点击任务栏行为，然后任务栏对齐方式选择居中对齐。

![QQ20260505-065856](img/QQ20260505-065856.png)

### 2.恢复资源管理器样式

1.打开文件夹，导入win11.reg，然后点击restart explorer.bat重启资源管理器

![QQ20260505-070202](img/QQ20260505-070202.png)

2.如果有图标显示不正常直接替换图标。打开我文件夹的win11替换win10图标文件夹，然后右键以管理员身份运行2_一键恢复原版图标-右键管理员运行.cmd，这样图标就显示正常了。

![QQ20260505-070452](img/QQ20260505-070452.png)

### 3.恢复开机图标

1.打开C:\Windows\Boot\Resources目录，删除你现在的bootres.dll，然后把你原来的bootres.dll名称改回去

### 4.恢复系统音效

1.打开提权软件，勾选启用全部特权，将删Media.exe拖进去运行

![QQ20260504-212027](img/QQ20260504-212027.png)

2.打开C:\Windows\Media目录，将你原来备份的音频移动回去。

### 5.恢复右键菜单

1.打开终端管理员输入这串命令

```powershell
reg.exe delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /va /f
```

# 结束
