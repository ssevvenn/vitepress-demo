import{_ as t,o,c as n,O as a}from"./chunks/framework.66cc414a.js";const m=JSON.parse('{"title":"快速入门教程","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/chapter-4/index.md","filePath":"markdown/chapter-4/index.md"}'),e={name:"markdown/chapter-4/index.md"},l=a(`<h1 id="快速入门教程" tabindex="-1">快速入门教程 <a class="header-anchor" href="#快速入门教程" aria-label="Permalink to &quot;快速入门教程&quot;">​</a></h1><h2 id="文件上链保存" tabindex="-1">文件上链保存 <a class="header-anchor" href="#文件上链保存" aria-label="Permalink to &quot;文件上链保存&quot;">​</a></h2><pre><code>import com.coolawchain.sdk.jar.model;
import com.coolawchain.sdk.jar.file;
import com.coolawchain.sdk.jar.cryptoUtil;
import com.googlecode.protobuf.format.JsonFormat;

//初始化前置节点对象（即链上操作发送对象）
//--赋值业务系统数字身份信息
String systemPrivateKey = &quot;2c173ae59c1a403a7b8e32ab2647589bef193f57a0bb04dfda5c1eb5f7bd79d0&quot;;
KeyPairs systemKeyPair = CryptoUtil.crypto.genAccountKey(ownerPrivateKey);
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemKeyPair, frontendUrl);

FileUpload oFileUpload = new FileUpload();

//设置要访问的前置节点
oFileUpload.frontend = oFrontend;
//设置要访问的业务域标识
oFileUpload.bizDomain = &quot;d2171dd13278269e63b348bb12da6c58946f19ff&quot;;
//待上传的文件本体对应的文件对象
File oLocalFile = new File(&quot;/storage/申请表.doc&quot;);
oFileUpload.file(oLocalFile); 
//--赋值提交上链交易的文件所有者数字身份标识（即文件所有者列表中的其中一个）
oFileUpload.ownerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
//--赋值文件所有者数字身份标识
String[] ownersList = {&quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;};
oFileUpload.owners = ownersList;

//--赋值文件名称
oFileUpload.fileName = &quot;申请表.doc&quot;;
//--赋值文件扩展名
oFileUpload.fileSuffix = &quot;doc&quot;;
//--赋值文件描述
oFileUpload.fileDescription = &quot;这是一个赋强公证申请表&quot;;
//--赋值文件附属属性
oFileUpload.fileProperty = &quot;{&#39;赋强公证流程&#39;: &#39;启动阶段文书&#39;,&#39;接收单位&#39;: &#39;公证处&#39;}&quot;;

//--赋值文件链上保存的副本数量
oFileUpload.fileCopy = 3;
//--赋值链上保存的文件切片数量
oFileUpload.fileSlice = 5;

//进行文件元数据和本体上链操作提交
//--赋值提交上链交易的文件所有者数字身份私钥，ownerID对应的私钥
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
FileTxStatus oFileTxStatus = oFileUpload.submit(ownerPrivateKey);

boolean flag = true;
do {
     //查询文件保存链上操作处理状态
     oFileTxStatus = oFileUpload.getUploadStatus();
     if (oFileTxStatus.status == &quot;UploadAccomplish&quot;) {
         flag = false;
         System.out.println(&quot;文件上链保存成功。&quot;);
     }
     Thread.sleep(2000);
} while (flag);
</code></pre><h2 id="结构数据上链保存" tabindex="-1">结构数据上链保存 <a class="header-anchor" href="#结构数据上链保存" aria-label="Permalink to &quot;结构数据上链保存&quot;">​</a></h2><pre><code>import com.coolawchain.sdk.jar.model;
import com.coolawchain.sdk.jar.structdata;
import com.coolawchain.sdk.jar.cryptoUtil;
import com.googlecode.protobuf.format.JsonFormat;

//初始化前置节点对象（即链上操作发送对象）
//--赋值业务系统数字身份信息
String systemPrivateKey = &quot;2c173ae59c1a403a7b8e32ab2647589bef193f57a0bb04dfda5c1eb5f7bd79d0&quot;;
KeyPairs systemKeyPair = CryptoUtil.crypto.genAccountKey(ownerPrivateKey);
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//--创建前置节点对象
Frontend oFrontend = new Frontend(systemKeyPair, frontendUrl);

DataUpload oDataUpload = new DataUpload() {
    @Override
    public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
       //事件触发条件：结构数据上链保存成功，并获得落块确认。
       DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
       System.out.println(&quot;数据链上ID =&quot; + oDataTxBlockInfo.dataID);
       System.out.println(&quot;数据当前版本ID =&quot; + oDataTxBlockInfo.versionID);
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
    }

    @Override
    public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
       //事件触发条件：结构数据保存上链交易落块确认失败，上链保存的结构数据被链回滚。
       //事件触发后，会返回错误信息。结构数据保存上链交易请求需重新提交。
       DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
       System.out.println(&quot;结构数据保存上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;结构数据保存上链交易落块确认失败的返回结果=&quot; + dUploadStatus.message);
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
    }

    @Override
    public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
       //事件触发条件：结构数据保存上链交易发送成功，等待区块链执行处理。 
       DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
       System.out.println(&quot;结构数据保存上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
    }

    @Override
    public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
       //事件触发条件：结构数据保存上链交易发送失败。
       System.out.println(&quot;结构数据保存上链交易发送失败的返回结果=&quot; + dUploadStatus.message);
    }

    @Override
    public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
       //事件触发条件：结构数据保存上链交易执行成功，结构数据上链保存成功，等待落块确认。
       DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       System.out.println(&quot;数据链上ID =&quot; + oDataTxBlockInfo.dataID);
       System.out.println(&quot;数据当前版本ID=&quot; + oDataTxBlockInfo.versionID);
       System.out.println(&quot;结构数据保存上链交易Hash=&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oDataTxBlockInfo.txExecTimestamp.toString());
       System.out.println(&quot;交易所在区块hash=&quot; + oDataTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oDataTxBlockInfo.blockedTimestamp.toString());
       System.out.println(&quot;交易所在区块高度=&quot; + oDataTxBlockInfo.blockHeight);
    }

    @Override
    public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
       //事件触发条件：结构数据保存上链交易执行失败，结构数据未上链保存。
       DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       System.out.println(&quot;结构数据保存上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + dUploadStatus.message);
    }

    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：DataUpload调用出现异常。并返回异常信息。
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
};

//待上链保存的结构数据在链外应用系统调用端的唯一标识，便于事件中进行后续业务逻辑处理。
String dataIDfromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oDataUpload.eventContext = dataIDfromCaller;
//设置要访问的前置节点
oDataUpload.frontend = oFrontend;
//设置要访问的业务域标识
oDataUpload.bizDomain = &quot;d2171dd13278269e63b348bb12da6c58946f19ff&quot;;
//--赋值提交上链交易的数据所有者数字身份标识（即结构数据所有者列表中的其中一个）
oDataUpload.ownerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
//赋值结构数据所有者数字身份标识列表
String[] ownersList = {&quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;};
oDataUpload.owners = ownersList;

//上链保存的结构数据内容
oFileMetaUpdate.dataContent = &quot;{&#39;姓名&#39;: &#39;张三&#39;,&#39;性别&#39;: &#39;男&#39;}&quot;;
//结构数据的附属属性
oFileMetaUpdate.dataProperty = &quot;人员基本信息描述&quot;;

//进行结构数据保存上链操作提交
//--赋值提交上链交易的数据所有者数字身份私钥，ownerID对应的私钥
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
oDataUpload.submit(ownerPrivateKey);
</code></pre>`,5),r=[l];function d(i,u,c,s,p,f){return o(),n("div",null,r)}const b=t(e,[["render",d]]);export{m as __pageData,b as default};
