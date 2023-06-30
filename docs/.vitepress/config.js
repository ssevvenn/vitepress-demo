module.exports = {
    title: "从法链",
    description: "Front end project and tips sharing",
    dest: './dist',
    base: '/vitepress-demo/',
    themeConfig: {
      siteTitle: "从法链",  //左上角的
      logo: "/logo.png",      //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
      // nav: [                  //右上角的导航栏
      //   {
      //     text: "前端",             //导航标签的名字
      //     items: [                  //这种格式是有下拉菜单的版本
      //       { text: "基础", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
      //       { text: "Vue", link: "/articles/vue/index" },
      //       { text: "React", link: "/articles/react/index" },
      //       { text: "小程序", link: "/articles/mini/index" },
      //       { text: "Electron", link: "/articles/electron/index" },
      //       { text: "Web3D", link: "/articles/web3d/index" },
      //       { text: "其他", link: "/articles/other/vitepress/index" },
      //     ],
      //   },
      //   { text: "算法", link: "/leetcode/LEET_CODE题解/47. 全排列 II" },   //这种是没有下拉菜单的版本
      //   { text: "项目", link: "/intent/" },
      // ],  
      // socialLinks: [{ icon: "github", link: "https://github.com/aiai0603" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
      // sidebar: {
      //   "/articles/other": [
      //     {
      //       text: "vitepress",    //标签名字
      //       collapsible: true,    //是不是可以动态展开
      //       collapsed: true,      //默认是不是展开
      //       items: [              //孩子
      //         {
      //           text: "index",        //标签名字
      //           link: "/articles/other/vitepress/index",         //链接
      //         },
      //       ],
      //     },
      //   ],
      // },
      displayAllHeaders: true,
      sidebar: [
          {
            text: '从法链概述',
            link: 'markdown/chapter-1/#从法链概述',
            items: [
            ],
          },
          {
            text: '名词解释',
            link: 'markdown/chapter-2/#名词解释',
            items: [
            ],
          },
          {
            text: '调用环境',
            link: 'markdown/chapter-3/#调用环境',
            items: [
            ],
          },
          {
            text: '快速入门教程',
            link: 'markdown/chapter-4/#快速入门教程',
            collapsible: true,    //是不是可以动态展开
            collapsed: true,      //默认是不是展开
            items: [
              {
                text: '4.1 文件上链保存',
                link: 'markdown/chapter-4/#文件上链保存',
              },
              {
                text: '4.2 结构数据上链保存',
                link: 'markdown/chapter-4/#结构数据上链保存',
              },
            ],
          },
          {
            text: '链上操作调用基本步骤',
            link: 'markdown/chapter-5/#链上操作调用基本步骤',
            collapsible: true,    //是不是可以动态展开
            collapsed: true,      //默认是不是展开
            items: [
              {
                text: '5.1 上链交易提交',
                link: 'markdown/chapter-5/#上链交易提交',
              },
              {
                text: '5.2 链上数据查询',
                link: 'markdown/chapter-5/#链上数据查询',
              },
            ],
          },
          {
            text: '链上操作',
            link: 'markdown/chapter-6/#链上操作',
            collapsible: true,    //是不是可以动态展开
            collapsed: true,      //默认是不是展开
            items: [
              {
                text: '6.1 调用前置条件',
                link: 'markdown/chapter-6/#调用前置条件',
              },
              {
                text: '6.2 文件操作',
                link: 'markdown/chapter-6/#文件操作',
                items: [
                  {
                    text: '6.2.1 文件保存',
                    link: 'markdown/chapter-6/#文件保存',
                  },
                  {
                    text: '6.2.2 文件元数据更新',
                    link: 'markdown/chapter-6/#文件元数据更新',
                  },
                  {
                    text: '6.2.3 文件本体更新',
                    link: 'markdown/chapter-6/#文件本体更新',
                  },
                  {
                    text: '6.2.4 文件授权',
                    link: 'markdown/chapter-6/#文件授权',
                  },
                  {
                    text: '6.2.5 文件元数据获取',
                    link: 'markdown/chapter-6/#文件元数据获取',
                  },
                  {
                    text: '6.2.6 文件本体获取',
                    link: 'markdown/chapter-6/#文件本体获取',
                  },
                  {
                    text: '6.2.7 文件删除',
                    link: 'markdown/chapter-6/#文件删除',
                  },
                  {
                    text: '6.2.8 文件本体清空',
                    link: 'markdown/chapter-6/#文件本体清空',
                  },
                  {
                    text: '6.2.9 文件验真',
                    link: 'markdown/chapter-6/#文件验真',
                  },
                  {
                    text: '6.2.10 文件追溯',
                    link: 'markdown/chapter-6/#文件追溯',
                  },
                ],
              },
              {
                text: '6.3 结构数据操作',
                link: 'markdown/chapter-6/#结构数据操作',
                items: [
                  {
                    text: '6.3.1 数据保存',
                    link: 'markdown/chapter-6/#数据保存',
                  },
                  {
                    text: '6.3.2 数据更新',
                    link: 'markdown/chapter-6/#数据更新',
                  },
                  {
                    text: '6.3.3 数据授权',
                    link: 'markdown/chapter-6/#数据授权',
                  },
                  {
                    text: '6.3.4 数据获取',
                    link: 'markdown/chapter-6/#数据获取',
                  },
                  {
                    text: '6.3.5 数据删除',
                    link: 'markdown/chapter-6/#数据删除',
                  },
                  {
                    text: '6.3.6 数据验真',
                    link: 'markdown/chapter-6/#数据验真',
                  },
                  {
                    text: '6.3.7 数据追溯',
                    link: 'markdown/chapter-6/#数据追溯',
                  },
                ],
              },
              {
                text: '6.4 合约操作',
                link: 'markdown/chapter-6/#合约操作',
                items: [
                  {
                    text: '6.4.1 合约方法调用',
                    link: 'markdown/chapter-6/#合约方法调用',
                  },
                ],
              },
            ],
          },
          {
            text: 'HTTP API参考',
            link: 'markdown/chapter-7/#http-api参考',
            collapsible: true,    //是不是可以动态展开
            collapsed: true,      //默认是不是展开
            items: [
              {
                text: '7.1 接口调用业务系统身份签名确认',
                link: 'markdown/chapter-7/#接口调用业务系统身份签名确认',
              },
              {
                text: '7.2 接口说明',
                link: 'markdown/chapter-7/#接口说明',
                items: [
                  {
                    text: '7.2.1 基础上链交易操作',
                    link: 'markdown/chapter-7/#基础上链交易操作',
                  },
                  {
                    text: '7.2.2 文件操作',
                    link: 'markdown/chapter-7/#文件操作',
                  },
                  {
                    text: '7.2.3 结构数据操作',
                    link: 'markdown/chapter-7/#结构数据操作',
                  },
                  {
                    text: '7.2.4 合约调用',
                    link: 'markdown/chapter-7/#合约调用',
                  },

                ],
              },
            ],
          },
          {
            text: 'CoolawChain Java SDK参考',
            link: 'markdown/chapter-8/#coolawchain-java-sdk参考',
            collapsible: true,    //是不是可以动态展开
            collapsed: true,      //默认是不是展开
            items: [
              {
                text: '8.1 com.coolawchain.sdk.file',
                link: 'markdown/chapter-8/#com.coolawchain.sdk.file',
                items: [
                  {
                    text: '8.1.1 FileUpload',
                    link: 'markdown/chapter-8/#fileupload',
                  },
                  {
                    text: '8.1.2 FileModify',
                    link: 'markdown/chapter-8/#filemodify',
                  },
                  {
                    text: '8.1.3 FileMetaUpate',
                    link: 'markdown/chapter-8/#filemetaupate',
                  },
                  {
                    text: '8.1.4 FileAuthorise',
                    link: 'markdown/chapter-8/#fileauthorise',
                  },
                  {
                    text: '8.1.5 FileMetaFetch',
                    link: 'markdown/chapter-8/#filemetafetch',
                  },
                  {
                    text: '8.1.6 FileFetch',
                    link: 'markdown/chapter-8/#filefetch',
                  },
                  {
                    text: '8.1.7 FileDelete',
                    link: 'markdown/chapter-8/#filedelete',
                  },
                  {
                    text: '8.1.8 FileEmptyApply',
                    link: 'markdown/chapter-8/#fileemptyapply',
                  },
                  {
                    text: '8.1.9 FileEmptyApprove',
                    link: 'markdown/chapter-8/#fileemptyapprove',
                  },
                  {
                    text: '8.1.10 FileDigestCheck',
                    link: 'markdown/chapter-8/#filedigestcheck',
                  },
                  {
                    text: '8.1.11 FileVersionsFetch',
                    link: 'markdown/chapter-8/#fileversionsfetch',
                  },
                  {
                    text: '8.1.12 FileRightsFetch',
                    link: 'markdown/chapter-8/#filerightsfetch',
                  },
                ],
              },
              {
                text: '8.2 com.coolawchain.sdk.structdata',
                link: 'markdown/chapter-8/chapter-8.1/#com.coolawchain.sdk.structdata',
                items: [
                  {
                    text: '8.2.1 DataUpload',
                    link: 'markdown/chapter-8/chapter-8.1/#dataupload',
                  },
                  {
                    text: '8.2.2 DataModify',
                    link: 'markdown/chapter-8/chapter-8.1/#datamodify',
                  },
                  {
                    text: '8.2.3 DataAuthorise',
                    link: 'markdown/chapter-8/chapter-8.1/#dataauthorise',
                  },
                  {
                    text: '8.2.4 DataFetch',
                    link: 'markdown/chapter-8/chapter-8.1/#datafetch',
                  },
                  {
                    text: '8.2.5 DataDelete',
                    link: 'markdown/chapter-8/chapter-8.1/#datadelete',
                  },
                  {
                    text: '8.2.6 DataDigestCheck',
                    link: 'markdown/chapter-8/chapter-8.1/#datadigestcheck',
                  },
                  {
                    text: '8.2.7 DataVersionsFetch',
                    link: 'markdown/chapter-8/chapter-8.1/#dataversionsfetch',
                  },
                  {
                    text: '8.2.8 DataRightsFetch',
                    link: 'markdown/chapter-8/chapter-8.1/#datarightsfetch',
                  },
                ],
              },
              {
                text: '8.3 com.coolawchain.sdk.contract',
                link: 'markdown/chapter-8/chapter-8.1/#comcoolawchainsdkcontract',
                items: [
                  {
                    text: '8.3.1 ContractCall',
                    link: 'markdown/chapter-8/chapter-8.1/#contractcall',
                  },
                ],
              },
              {
                text: '8.4 com.coolawchain.sdk.model',
                link: 'markdown/chapter-8/chapter-8.2/#com.coolawchain.sdk.model',
                items: [
                  {
                    text: '8.4.1 Frontend',
                    link: 'markdown/chapter-8/chapter-8.2/#frontend',
                  },
                  {
                    text: '8.4.2 FileTxStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#filetxstatus',
                  },
                  {
                    text: '8.4.3 FileMetaFetchStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#filemetafetchstatus',
                  },
                  {
                    text: '8.4.4 FileFetchStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#filefetchstatus',
                  },
                  {
                    text: '8.4.5 FileDigestCheckStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#filedigestcheckstatus',
                  },
                  {
                    text: '8.4.6 FileVersionsFetchStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#fileversionsfetchstatus',
                  },
                  {
                    text: '8.4.7 FileRightsFetchStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#filerightsfetchstatus',
                  },
                  {
                    text: '8.4.8 DataTxStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#datatxstatus',
                  },
                  {
                    text: '8.4.9 DataFetchStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#datafetchstatus',
                  },
                  {
                    text: '8.4.10 DataDigestCheckStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#datadigestcheckstatus',
                  },
                  {
                    text: '8.4.11 DataVersionsFetchStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#dataversionsfetchstatus',
                  },
                  {
                    text: '8.4.12 DataRightsFetchStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#datarightsfetchstatus',
                  },
                  {
                    text: '8.4.13 ContractCallStatus',
                    link: 'markdown/chapter-8/chapter-8.2/#contractcallstatus',
                  },
                ],
              },
              {
                text: '8.5 com.coolawchain.sdk.exceptions',
                link: 'markdown/chapter-8/chapter-8.2/#com.coolawchain.sdk.exceptions',
                items: [
                  {
                    text: '8.5.1 HttpCodeErrorException',
                    link: 'markdown/chapter-8/chapter-8.2/#httpcodeerrorexception',
                  },
                  {
                    text: '8.5.2 FetchException',
                    link: 'markdown/chapter-8/chapter-8.2/#fetchexception',
                  },
                  {
                    text: '8.5.3 TxException',
                    link: 'markdown/chapter-8/chapter-8.2/#txexception',
                  },
                ],
              },
              {
                text: '8.6 com.coolawchain.sdk.utils',
                link: 'markdown/chapter-8/chapter-8.2/#com.coolawchain.sdk.utils',
                items: [
                  {
                    text: '8.6.1 CryptoUtil',
                    link: 'markdown/chapter-8/chapter-8.2/#cryptoutil',
                  },
                  {
                    text: '8.6.2 SM4Util',
                    link: 'markdown/chapter-8/chapter-8.2/#sm4util',
                  },
                ],
              },
            ],
          },
          {
            text: '消息信息',
            link: 'markdown/chapter-9/#消息信息',
            items: [
            ],
          },
        ],
    }
}
  