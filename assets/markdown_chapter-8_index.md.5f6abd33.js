import{_ as o,o as a,c as r,O as t,z as e}from"./chunks/framework.66cc414a.js";const F=JSON.parse('{"title":"CoolawChain Java SDK参考","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/chapter-8/index.md","filePath":"markdown/chapter-8/index.md"}'),n={name:"markdown/chapter-8/index.md"},i=t(`<h1 id="coolawchain-java-sdk参考" tabindex="-1">CoolawChain Java SDK参考 <a class="header-anchor" href="#coolawchain-java-sdk参考" aria-label="Permalink to &quot;CoolawChain Java SDK参考&quot;">​</a></h1><h2 id="com-coolawchain-sdk-file" tabindex="-1">com.coolawchain.sdk.file <a class="header-anchor" href="#com-coolawchain-sdk-file" aria-label="Permalink to &quot;com.coolawchain.sdk.file&quot;">​</a></h2><h3 id="fileupload" tabindex="-1">FileUpload <a class="header-anchor" href="#fileupload" aria-label="Permalink to &quot;FileUpload&quot;">​</a></h3><p>用于进行文件上链保存的操作对象。</p><h4 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="fileupload-frontend-string" tabindex="-1">FileUpload (Frontend, String) <a class="header-anchor" href="#fileupload-frontend-string" aria-label="Permalink to &quot;FileUpload (Frontend, String)&quot;">​</a></h5><pre><code>public FileUpload (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileUpload oFileUpload = new FileUpload(oFrontend, businessDomainID);
</code></pre><h5 id="fileupload-1" tabindex="-1">FileUpload () <a class="header-anchor" href="#fileupload-1" aria-label="Permalink to &quot;FileUpload ()&quot;">​</a></h5><p>构造一个FileUpload对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileUpload ();
</code></pre><h4 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend" tabindex="-1">frontend <a class="header-anchor" href="#frontend" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要保存文件的链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="file" tabindex="-1">file <a class="header-anchor" href="#file" aria-label="Permalink to &quot;file&quot;">​</a></h5><p>设置上链保存的文件的文件对象。</p><pre><code>public File file { set; get; }
</code></pre><p>示例：</p><pre><code>//待上传的文件本体对应的文件对象
File oLocalFile = new File(&quot;/storage/申请表.doc&quot;);
oFileUpload.file = oLocalFile;
</code></pre><h5 id="filename" tabindex="-1">fileName <a class="header-anchor" href="#filename" aria-label="Permalink to &quot;fileName&quot;">​</a></h5><p>设置上链保存的文件的文件名称。</p><pre><code>public String fileName { set; get; }
</code></pre><h5 id="filesuffix" tabindex="-1">fileSuffix <a class="header-anchor" href="#filesuffix" aria-label="Permalink to &quot;fileSuffix&quot;">​</a></h5><p>设置上链保存的文件的文件扩展名。如：&quot;doc&quot;，&quot;pdf&quot;，&quot;mp3&quot;等。</p><pre><code>public String fileSuffix { set; get; }
</code></pre><h5 id="filedescription" tabindex="-1">fileDescription <a class="header-anchor" href="#filedescription" aria-label="Permalink to &quot;fileDescription&quot;">​</a></h5><p>设置文件在链上保存时一并保存的文件描述信息。fileDescription的信息将被区块链加密保存。</p><p>如果想要对链上已保存的fileDescription进行清空处理，则此属性需设置NULL。</p><pre><code>public String fileDescription { set; get; }
</code></pre><h5 id="fileproperty" tabindex="-1">fileProperty <a class="header-anchor" href="#fileproperty" aria-label="Permalink to &quot;fileProperty&quot;">​</a></h5><p>设置文件在链上保存时一并保存的附属属性信息。附属属性建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。fileProperty的信息将被区块链加密保存。</p><p>如果想要对链上已保存的fileProperty进行清空处理，则此属性需设置NULL。</p><pre><code>public String fileProperty { set; get; }
</code></pre><h5 id="filecopy" tabindex="-1">fileCopy <a class="header-anchor" href="#filecopy" aria-label="Permalink to &quot;fileCopy&quot;">​</a></h5><p>设置文件在链上保存时文件副本数量。文件副本是指文件本体在区块链节点网络中保存同时保存多少份拷贝。</p><pre><code>public int fileCopy { set; get; }
</code></pre><h5 id="fileslice" tabindex="-1">fileSlice <a class="header-anchor" href="#fileslice" aria-label="Permalink to &quot;fileSlice&quot;">​</a></h5><p>设置文件在链上保存时文件切片数量。为了提高文件上链的保存，以及区块链中文件自我修复的效率，同时确保链上保存文件的安全性和隐私性，文件被区块链系统切分成若干碎片，然后随机分散保存于区块链节点网络中。</p><pre><code>public int fileSlice { set; get; }
</code></pre><h5 id="ownerid" tabindex="-1">ownerID <a class="header-anchor" href="#ownerid" aria-label="Permalink to &quot;ownerID&quot;">​</a></h5><p>设置提交上链交易的文件所有者数字身份标识，必须是owners中的一个数字身份标识。</p><pre><code>public String ownerID { set; get; }
</code></pre><h5 id="owners" tabindex="-1">owners <a class="header-anchor" href="#owners" aria-label="Permalink to &quot;owners&quot;">​</a></h5><p>设置在链上保存的文件所有者的数字身份标识列表。文件所有者有权添加和删除文件分享者列表和文件读取者列表中的数字身份标识。</p><pre><code>public String[] owners { set; get; }
</code></pre><p>示例：</p><pre><code>String[] ownerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};

oFileUpload.owners = ownerIDs;
</code></pre><h5 id="sharers" tabindex="-1">sharers <a class="header-anchor" href="#sharers" aria-label="Permalink to &quot;sharers&quot;">​</a></h5><p>设置要授予文件分享权限的数字身份标识列表。文件分享者有权添加文件读取者和删除自己添加的读取者数字身份标识。可以后续通过&quot;文件授权&quot;链上操作进行授权（FileAuthorise）。</p><p>如果fileID属性设置了已保存于链上的文件链上ID，此属性区块链做无效处理。即文件更新时，不会进行文件分享权限更新处理。</p><pre><code>public String[] sharers { set; get; }
</code></pre><p><strong>示例：</strong></p><pre><code>//设置要授予文件分享权限的数字身份标识列表
String[] sharerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oFileUpload.sharers = sahrerIDs;
</code></pre><h5 id="readers" tabindex="-1">readers <a class="header-anchor" href="#readers" aria-label="Permalink to &quot;readers&quot;">​</a></h5><p>设置要授予文件读取权限的数字身份标识列表。可以后续通过&quot;文件授权&quot;链上操作进行授权（FileAuthorise）。</p><p>如果fileID属性设置了已保存于链上的文件链上ID，此属性区块链做无效处理。即文件更新时，不会进行文件读取权限更新处理。</p><pre><code>public String[] readers { set; get; }
</code></pre><p><strong>示例：</strong></p><pre><code>//设置要授予文件读取权限的数字身份标识列表
String[] readerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oFileUpload.readers = readerIDs;
</code></pre><h5 id="eventcontext" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//上链保存文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oFileUpload.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="submit" tabindex="-1">submit <a class="header-anchor" href="#submit" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交文件上链交易请求，开始进行文件上链保存操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit(String ownerPrivateKey);
</code></pre><p><strong>参数</strong></p><p>ownerPrivateKey String</p><p>设置进行当前上链保存操作的文件所有者的数字身份私钥，ownerID对应的私钥。私钥用于对文件上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--文件所有者数字身份私钥
String ownerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行文件元数据和本体上链操作提交
oFileUpload.submit (ownerPrivateKey);
</code></pre><h5 id="createtxbody" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成文件上链操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的文件上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成文件上链交易体
String fileUploadTxBody= oFileUpload.createTxBody();
//用文件所有者数字身份对文件上链交易体进行签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;

//--对文件上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(fileUploadTxBody, ownerPrivateKey);
</code></pre><h5 id="submittxbody" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用文件上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交文件上链交易请求，开始进行文件上链保存操作。调用此方法，onTxBlockConfirm、onTxSendSuccess等事件不会被触发。</p><pre><code>public void submitTxBody(String fileUploadTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>fileUploadTxBody String</p><p>文件上链交易体原文</p><p>txSign String</p><p>文件上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备文件保存上链交易体
FileUpload oPrepareFileUploadTxBody = new FileUpload();
File oLocalFile = new File(&quot;/storage/申请表.doc&quot;);
oPrepareFileUploadTxBody.file = oLocalFile; 
oPrepareFileUploadTxBody.ownerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String[] ownersList = {&quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;};
oPrepareFileUploadTxBody.owners = ownersList;
oPrepareFileUploadTxBody.fileCopy = 3;
oPrepareFileUploadTxBody.fileSlice = 5;
String fileUploadTxBody = oPrepareFileUploadTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行fileUploadTxBody签名
String ownerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(fileUploadTxBody, ownerPrivateKey);

//【程序A】提交文件上链交易，并跟踪上传状态
FileUpload oFiledUpload = new FileUpload (frontendServer, businessDomainID);
File oLocalFile = new File(&quot;/storage/申请表.doc&quot;);
oFileUpload.file = oLocalFile; 
oFileUpload.eventContext =fileIDFromCaller;
oFiledUpload.submitTxBody (fileUploadTxBody, txSign);
</code></pre><h4 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在文件元数据成功上链保存，并获得落块确认时发生。此时文件本体仍在上链处理中。</p><pre><code>public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context);
</code></pre><p>参数</p><p>fUplStatus FileTxStatus</p><p>包含文件上链操作的当前处理状态信息的对象。</p><p>fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：</p><p>| status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileUpload oFileUpload = new FileUpload() {
    @Override
    public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
       //事件触发条件：文件元数据成功上链保存，并获得落块确认。
       //此时文件本体仍在上链处理中。
       FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在因落块确认失败，文件元数据上链保存被链回滚时发生。文件上链交易请求需重新提交。</p><pre><code>public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context);
</code></pre><p>参数</p><p>fUplStatus FileTxStatus</p><p>包含文件上链操作的当前处理状态信息的对象。</p><p>fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileUpload oFileUpload = new FileUpload() {
    @Override
    public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
       //事件触发条件：文件上链交易落块确认失败，上链保存的文件元数据被链回滚。
       //事件触发后，会返回错误信息。文件上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
       System.out.println(&quot;文件上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;文件上链交易落块确认失败的返回结果=&quot; + fUplStatus.message);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxsendsuccess" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在文件上链交易被节点确认接收时发生。此时文件上链交易处于全网同步，并等待执行处理的状态。</p><pre><code>public void onTxSendSuccess(FileTxStatus fUplStatus, Object context);
</code></pre><p>参数</p><p>fUplStatus FileTxStatus</p><p>包含文件上链操作的当前处理状态信息的对象。</p><p>fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileUpload oFileUpload = new FileUpload() {
    @Override
    public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
       //事件触发条件：文件上链交易发送成功，等待区块链执行处理。 
       FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
       System.out.println(&quot;文件上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在节点接收文件上链交易失败时发生。文件上链交易请求需重新提交。</p><pre><code>public void onTxSendFailure(FileTxStatus fUplStatus, Object context);
</code></pre><p>参数</p><p>fUplStatus FileTxStatus</p><p>包含文件上链操作的当前处理状态信息的对象。</p><p>fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileUpload oFileUpload = new FileUpload() {
    @Override
    public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
       //事件触发条件：文件上链交易发送失败。
       //事件触发后，会返回错误信息。
       System.out.println(&quot;文件上链交易发送失败的返回状态=&quot; + fUplStatus.status);
       System.out.println(&quot;文件上链交易发送失败的返回结果=&quot; + fUplStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在文件上链交易执行成功，文件元数据上链保存，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(FileTxStatus fUplStatus, Object context);
</code></pre><p>参数</p><p>fUplStatus FileTxStatus</p><p>包含文件上链操作的当前处理状态信息的对象。</p><p>fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：</p><p>| status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileUpload oFileUpload = new FileUpload() {
    @Override
    public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
       //事件触发条件：文件上链交易执行成功，文件元数据上链保存，等待落块确认。
       //此时文件本体仍在上链处理中。
       FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;文件版本ID=&quot; + oFileTxBlockInfo.versionID);
       System.out.println(&quot;文件上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oFileTxBlockInfo.txExecTimestamp.toString());
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oFileTxBlockInfo.blockedTimestamp.toString());
       System.out.println(&quot;交易所在区块高度=&quot; + oFileTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在文件上链交易执行失败，文件元数据和文件本体均未上链保存时发生。事件触发后会返回错误信息。文件上链交易请求需重新提交。</p><pre><code>public void onTxExecFailure(FileTxStatus fUplStatus, Object context);
</code></pre><p>参数</p><p>fUplStatus FileTxStatus</p><p>包含文件上链操作的当前处理状态信息的对象。</p><p>fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileUpload oFileUpload = new FileUpload() {
    @Override
    public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
       //事件触发条件：文件上链交易执行失败，文件元数据和文件本体均未上链保存。
       //事件触发后，会返回错误信息。文件上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + fUplStatus.message);
    }
}
</code></pre><h5 id="onuploadaccomplish" tabindex="-1">onUploadAccomplish <a class="header-anchor" href="#onuploadaccomplish" aria-label="Permalink to &quot;onUploadAccomplish&quot;">​</a></h5><p>此为事件在文件上链操作处理彻底完成，文件元数据和文件本体均成功上链保存时发生。</p><pre><code>public void onUploadAccomplish(FileTxStatus fUplStatus, Object context);
</code></pre><p>参数</p><p>fUplStatus FileTxStatus</p><p>包含文件上链操作的当前处理状态信息的对象。</p><p>fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：</p><p>| status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileUpload oFileUpload = new FileUpload() {
    @Override
    public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
       //事件触发条件：在文件上链操作处理彻底完成，文件元数据和文件本体均成功上链保存。
       FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;文件版本ID=&quot; + oFileTxBlockInfo.versionID);
       System.out.println(&quot;文件上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;文件名=&quot; + this.fileName);
       System.out.println(&quot;文件描述=&quot; + this.fileDescription); 
       System.out.println(&quot;文件附属属性=&quot; + this.fileProperty); 
    }
}
</code></pre><h5 id="onuploadfailure" tabindex="-1">onUploadFailure <a class="header-anchor" href="#onuploadfailure" aria-label="Permalink to &quot;onUploadFailure&quot;">​</a></h5><p>此为事件在文件本体上链保存因超过重复尝试次数而超时失败时发生。文件上链交易请求需重新提交。</p><pre><code>public void onUploadFailure (FileTxStatus fUplStatus, Object context);
</code></pre><p><strong>参数</strong></p><p>fUplStatus FileTxStatus</p><p>包含文件上链操作的当前处理状态信息的对象。</p><p>fUplStatus中将包含如下返回信息，详细解释请参看FileTxStatus对象相关描述：</p><p>| status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p><strong>示例：</strong></p><pre><code>FileUpload oFileUpload = new FileUpload() {
    @Override
    public void onUploadFailure (FileTxStatus fUplStatus, Object context) {
       //事件触发条件：文件本体上链保存因超过重复尝试次数而超时失败，文件上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fUplStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + fUplStatus.message);
    }
}
</code></pre><h5 id="onerror" tabindex="-1">onError <a class="header-anchor" href="#onerror" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileUpload调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>FileUpload oFileUpload = new FileUpload() {
    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：FileUpload调用出现异常，并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="filetxstatus-status状态编码" tabindex="-1">FileTxStatus.status状态编码 <a class="header-anchor" href="#filetxstatus-status状态编码" aria-label="Permalink to &quot;FileTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收文件上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收文件上链交易请求失败，文件上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>文件上链交易执行成功，文件元数据上链保存，等待落块确认。文件本体仍在上链处理中。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td>文件上链交易执行失败，文件元数据和文件本体均未上链保存。文件上链交易请求需重新提交。</td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>文件元数据成功上链保存，并获得落块确认，文件本体仍在上链处理中。</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td>因落块确认失败，上链保存的文件元数据被链回滚。文件上链交易请求需重新提交。</td></tr><tr><td>UploadAccomplish</td><td>文件成功上链保存。</td><td>文件保存链上操作处理彻底完成，文件元数据和文件本体均成功上链保存。</td></tr><tr><td>UploadFailure</td><td>文件上链保存失败。</td><td>文件本体上链保存因超过重复尝试次数而超时失败，文件上链交易请求需重新提交。</td></tr></tbody></table><h3 id="filemodify" tabindex="-1">FileModify <a class="header-anchor" href="#filemodify" aria-label="Permalink to &quot;FileModify&quot;">​</a></h3><p>用于进行文件更新的操作对象。</p><h4 id="构造函数-1" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-1" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="filemodify-frontend-string" tabindex="-1">FileModify (Frontend, String) <a class="header-anchor" href="#filemodify-frontend-string" aria-label="Permalink to &quot;FileModify (Frontend, String)&quot;">​</a></h5><pre><code>public FileModify (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileModify oFileModify = new FileModify(oFrontend, businessDomainID);
</code></pre><h5 id="filemodify-1" tabindex="-1">FileModify () <a class="header-anchor" href="#filemodify-1" aria-label="Permalink to &quot;FileModify ()&quot;">​</a></h5><p>构造一个FileModify对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileModify ();
</code></pre><p>|-----------------------|</p><h4 id="属性-1" tabindex="-1">属性 <a class="header-anchor" href="#属性-1" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-1" tabindex="-1">frontend <a class="header-anchor" href="#frontend-1" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-1" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-1" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要更新文件的链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid" tabindex="-1">fileID <a class="header-anchor" href="#fileid" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要进行更新的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="file-1" tabindex="-1">File <a class="header-anchor" href="#file-1" aria-label="Permalink to &quot;File&quot;">​</a></h5><p>设置上链更新的新版本文件对应的文件对象。</p><pre><code>public File file { set; get; }
</code></pre><p>示例：</p><pre><code>//待上传的新版本文件本体对应的文件对象
File oLocalFile = new File(&quot;/storage/申请表.doc&quot;);
oFileModify.file = oLocalFile;
</code></pre><h5 id="filename-1" tabindex="-1">fileName <a class="header-anchor" href="#filename-1" aria-label="Permalink to &quot;fileName&quot;">​</a></h5><p>设置要更新的文件名称。</p><pre><code>public String fileName { set; get; }
</code></pre><h5 id="filesuffix-1" tabindex="-1">fileSuffix <a class="header-anchor" href="#filesuffix-1" aria-label="Permalink to &quot;fileSuffix&quot;">​</a></h5><p>设置要更新的文件扩展名。如：&quot;doc&quot;，&quot;pdf&quot;，&quot;mp3&quot;等。</p><pre><code>public String fileSuffix { set; get; }
</code></pre><h5 id="filedescription-1" tabindex="-1">fileDescription <a class="header-anchor" href="#filedescription-1" aria-label="Permalink to &quot;fileDescription&quot;">​</a></h5><p>设置要更新的文件描述信息。fileDescription的信息将被区块链加密保存，只有文件所有者和拥有文件读取权限方可获得相应的明文信息。</p><p>如果想要对链上已保存的fileDescription进行清空处理，则此属性需设置NULL。</p><pre><code>public String fileDescription { set; get; }
</code></pre><h5 id="fileproperty-1" tabindex="-1">fileProperty <a class="header-anchor" href="#fileproperty-1" aria-label="Permalink to &quot;fileProperty&quot;">​</a></h5><p>设置要更新的文件附属属性信息。附属属性建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。fileProperty的信息将被区块链加密保存，只有文件所有者和拥有文件读取权限方可获得相应的明文信息。</p><p>如果想要对链上已保存的fileProperty进行清空处理，则此属性需设置NULL。</p><pre><code>public String fileProperty { set; get; }
</code></pre><h5 id="filecopy-1" tabindex="-1">fileCopy <a class="header-anchor" href="#filecopy-1" aria-label="Permalink to &quot;fileCopy&quot;">​</a></h5><p>设置要更新的文件本体在链上保存时文件副本数量。文件副本是指文件本体在区块链节点网络中保存同时保存多少份拷贝。</p><pre><code>public int fileCopy { set; get; }
</code></pre><h5 id="fileslice-1" tabindex="-1">fileSlice <a class="header-anchor" href="#fileslice-1" aria-label="Permalink to &quot;fileSlice&quot;">​</a></h5><p>设置要更新的文件本体在链上保存时文件切片数量。为了提高文件更新上链的保存，以及区块链中文件自我修复的效率，同时确保链上保存文件的安全性和隐私性，文件被区块链系统切分成若干碎片，然后随机分散保存于区块链节点网络中。</p><pre><code>public int fileSlice { set; get; }
</code></pre><h5 id="ownerid-1" tabindex="-1">ownerID <a class="header-anchor" href="#ownerid-1" aria-label="Permalink to &quot;ownerID&quot;">​</a></h5><p>设置提交上链交易的文件所有者数字身份标识，必须是owners中的一个数字身份标识。</p><pre><code>public String ownerID { set; get; }
</code></pre><h5 id="eventcontext-1" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-1" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//上链更新文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oFileModify.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法-1" tabindex="-1">方法 <a class="header-anchor" href="#方法-1" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="submit-1" tabindex="-1">submit <a class="header-anchor" href="#submit-1" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交文件更新上链交易请求，开始进行文件更新上链操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit(String ownerPrivateKey);
</code></pre><p><strong>参数</strong></p><p>ownerPrivateKey String</p><p>进行文件更新的所有者的数字身份私钥，ownerID对应的私钥。私钥用于对文件更新上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--链上文件所有者数字身份私钥
String ownerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行文件元数据和本体上链更新操作提交
oFileModify.submit (ownerPrivateKey);
</code></pre><h5 id="createtxbody-1" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-1" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成文件更新操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的文件更新上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成文件更新上链交易体
String fileModifyTxBody= oFileModify.createTxBody();
//用文件所有者数字身份对文件更新上链交易体进行签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;

//--对文件更新上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(fileModifyTxBody, ownerPrivateKey);
</code></pre><h5 id="submittxbody-1" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-1" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用文件更新上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交文件更新上链交易请求，开始进行文件更新上链操作。调用此方法，onTxBlockConfirm、onTxSendSuccess等事件不会被触发。</p><pre><code>public void submitTxBody(String fileModifyTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>fileModifyTxBody String</p><p>文件更新上链交易体原文</p><p>txSign String</p><p>文件更新上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备文件更新上链交易体
FileModify oPrepareFileModifyTxBody = new FileModify();
File oLocalFile = new File(&quot;/storage/申请表.doc&quot;);
oPrepareFileModifyTxBody.file = oLocalFile; 
oPrepareFileModifyTxBody.SenderID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
oPrepareFileModifyTxBody.fileCopy = 3;
oPrepareFileModifyTxBody.fileSlice = 5;
String fileModifyTxBody = oPrepareFileModifyTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行fileModifyTxBody签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
String txSign = CryptoUtil.crypto.signature(fileModifyTxBody, ownerPrivateKey);

//【程序A】提交文件更新上链交易，并跟踪上传状态
FileModify oFileModify = new FileModify (frontendServer, businessDomainID);
File oLocalFile = new File(&quot;/storage/申请表.doc&quot;);
oFileModify.file = oLocalFile; 
oFileModify.eventContext =fileIDFromCaller;
oFileModify.submitTxBody (fileModifyTxBody, txSign);
</code></pre><h4 id="事件-1" tabindex="-1">事件 <a class="header-anchor" href="#事件-1" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-1" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-1" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在文件元数据成功上链保存，并获得落块确认时发生。此时文件本体仍在上链处理中。</p><pre><code>public void onTxBlockConfirm(FileTxStatus fModifyStatus, Object context);
</code></pre><p>参数</p><p>fModifyStatus FileModifyStatus</p><p>包含文件更新操作的当前处理状态信息的对象。</p><p>fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：</p><p>| status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileModify oFileModify = new FileModify() {
    @Override
    public void onTxBlockConfirm(FileTxStatus fModifyStatus, Object context) {
       //事件触发条件：文件元数据成功上链保存，并获得落块确认。
       //此时文件本体仍在上链处理中。
       FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-1" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-1" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在因落块确认失败，文件元数据上链保存被链回滚时发生。文件更新上链交易请求需重新提交。</p><pre><code>public void onTxBlockCfmFailure(FileTxStatus fModifyStatus, Object context);
</code></pre><p>参数</p><p>fModifyStatus FileModifyStatus</p><p>包含文件更新操作的当前处理状态信息的对象。</p><p>fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileModify oFileModify = new FileModify() {
    @Override
    public void onTxBlockCfmFailure(FileTxStatus fModifyStatus, Object context) {
       //事件触发条件：文件更新上链交易落块确认失败，上链更新的文件元数据被链回滚。
       //事件触发后，会返回错误信息。文件更新上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
       System.out.println(&quot;文件更新上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;文件更新上链交易落块确认失败的返回结果=&quot; + fModifyStatus.message);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxsendsuccess-1" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-1" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在文件更新上链交易被节点确认接收时发生。此时文件更新上链交易处于全网同步，并等待执行处理的状态。</p><pre><code>public void onTxSendSuccess(FileTxStatus fModifyStatus, Object context);
</code></pre><p>参数</p><p>fModifyStatus FileModifyStatus</p><p>包含文件更新操作的当前处理状态信息的对象。</p><p>fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileModify oFileModify = new FileModify() {
    @Override
    public void onTxSendSuccess(FileTxStatus fModifyStatus, Object context) {
       //事件触发条件：文件更新上链交易发送成功，等待区块链执行处理。 
       FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
       System.out.println(&quot;文件更新上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-1" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-1" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在节点接收文件更新上链交易失败时发生。文件更新上链交易请求需重新提交。</p><pre><code>public void onTxSendFailure(FileTxStatus fModifyStatus, Object context);
</code></pre><p>参数</p><p>fModifyStatus FileModifyStatus</p><p>包含文件更新操作的当前处理状态信息的对象。</p><p>fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileModify oFileModify = new FileModify() {
    @Override
    public void onTxSendFailure(FileTxStatus fModifyStatus, Object context) {
       //事件触发条件：文件更新上链交易发送失败。
       //事件触发后，会返回错误信息。
       System.out.println(&quot;文件更新上链交易发送失败的返回状态=&quot; + fModifyStatus.status);
       System.out.println(&quot;文件更新上链交易发送失败的返回结果=&quot; + fModifyStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-1" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-1" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在文件更新上链交易执行成功，文件元数据上链保存，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(FileTxStatus fModifyStatus, Object context);
</code></pre><p>参数</p><p>fModifyStatus FileModifyStatus</p><p>包含文件更新操作的当前处理状态信息的对象。</p><p>fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：</p><p>| status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileModify oFileModify = new FileModify() {
    @Override
    public void onTxExecSuccess(FileTxStatus fModifyStatus, Object context) {
       //事件触发条件：文件更新上链交易执行成功，文件元数据上链保存，等待落块确认。
       //此时文件本体仍在上链处理中。
       FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;文件版本ID=&quot; + oFileTxBlockInfo.versionID);
       System.out.println(&quot;文件更新上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oFileTxBlockInfo.txExecTimestamp.toString());
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oFileTxBlockInfo.blockedTimestamp.toString());
       System.out.println(&quot;交易所在区块高度=&quot; + oFileTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure-1" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-1" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在文件更新上链交易执行失败，文件元数据和文件本体均未上链保存时发生。事件触发后会返回错误信息。文件更新上链交易请求需重新提交。</p><pre><code>public void onTxExecFailure(FileTxStatus fModifyStatus, Object context);
</code></pre><p>参数</p><p>fModifyStatus FileModifyStatus</p><p>包含文件更新上链操作的当前处理状态信息的对象。</p><p>fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileModify oFileModify = new FileModify() {
    @Override
    public void onTxExecFailure(FileTxStatus fModifyStatus, Object context) {
       //事件触发条件：文件更新上链交易执行失败，文件元数据和文件本体均未上链保存。
       //事件触发后，会返回错误信息。文件更新上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件更新上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + fModifyStatus.message);
    }
}
</code></pre><h5 id="onuploadaccomplish-1" tabindex="-1">onUploadAccomplish <a class="header-anchor" href="#onuploadaccomplish-1" aria-label="Permalink to &quot;onUploadAccomplish&quot;">​</a></h5><p>此为事件在文件更新操作处理彻底完成，文件元数据和文件本体均成功上链保存时发生。</p><pre><code>public void onUploadAccomplish(FileTxStatus fModifyStatus, Object context);
</code></pre><p>参数</p><p>fModifyStatus FileModifyStatus</p><p>包含文件更新操作的当前处理状态信息的对象。</p><p>fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：</p><p>| status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileModify oFileModify = new FileModify() {
    @Override
    public void onUploadAccomplish(FileTxStatus fModifyStatus, Object context) {
       //事件触发条件：在文件更新操作处理彻底完成，文件元数据和文件本体均成功上链保存。
       FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;文件版本ID=&quot; + oFileTxBlockInfo.versionID);
       System.out.println(&quot;文件更新上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;文件名=&quot; + this.fileName);
       System.out.println(&quot;文件描述=&quot; + this.fileDescription); 
       System.out.println(&quot;文件附属属性=&quot; + this.fileProperty); 
    }
}
</code></pre><h5 id="onuploadfailure-1" tabindex="-1">onUploadFailure <a class="header-anchor" href="#onuploadfailure-1" aria-label="Permalink to &quot;onUploadFailure&quot;">​</a></h5><p>此为事件在文件本体上链保存因超过重复尝试次数而超时失败时发生。文件更新上链交易请求需重新提交。</p><pre><code>public void onUploadFailure (FileTxStatus fModifyStatus, Object context);
</code></pre><p><strong>参数</strong></p><p>fModifyStatus FileModifyStatus</p><p>包含文件更新操作的当前处理状态信息的对象。</p><p>fModifyStatus中将包含如下返回信息，详细解释请参看FileModifyStatus对象相关描述：</p><p>| status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p><strong>示例：</strong></p><pre><code>FileModify oFileModify = new FileModify() {
    @Override
    public void onUploadFailure (FileTxStatus fModifyStatus, Object context) {
       //事件触发条件：文件本体上链保存因超过重复尝试次数而超时失败，文件更新上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fModifyStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + fModifyStatus.message);
    }
}
</code></pre><h5 id="onerror-1" tabindex="-1">onError <a class="header-anchor" href="#onerror-1" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileModify调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>FileModify oFileModify = new FileModify() {
    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：FileModify调用出现异常，并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="filetxstatus-status状态编码-1" tabindex="-1">FileTxStatus.status状态编码 <a class="header-anchor" href="#filetxstatus-status状态编码-1" aria-label="Permalink to &quot;FileTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收文件更新上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收文件更新上链交易请求失败，文件更新上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>文件更新上链交易执行成功，文件元数据上链保存，等待落块确认。文件本体仍在上链处理中。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td>文件更新上链交易执行失败，文件元数据和文件本体均未上链保存。文件更新上链交易请求需重新提交。</td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>文件元数据成功上链保存，并获得落块确认，文件本体仍在上链处理中。</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td>因落块确认失败，上链保存的文件元数据被链回滚。文件更新上链交易请求需重新提交。</td></tr><tr><td>UploadAccomplish</td><td>文件成功上链保存。</td><td>文件保存链上操作处理彻底完成，文件元数据和文件本体均成功上链保存。</td></tr><tr><td>UploadFailure</td><td>文件更新上链保存失败。</td><td>文件本体上链保存因超过重复尝试次数而超时失败，文件更新上链交易请求需重新提交。</td></tr></tbody></table><h3 id="filemetaupate" tabindex="-1">FileMetaUpate <a class="header-anchor" href="#filemetaupate" aria-label="Permalink to &quot;FileMetaUpate&quot;">​</a></h3><p>用于进行文件元数据更新的操作对象。</p><h4 id="构造函数-2" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-2" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="filemetaupate-frontend-string" tabindex="-1">FileMetaUpate (Frontend, String) <a class="header-anchor" href="#filemetaupate-frontend-string" aria-label="Permalink to &quot;FileMetaUpate (Frontend, String)&quot;">​</a></h5><pre><code>public FileMetaUpate (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileMetaUpate oFileMetaUpate = new FileMetaUpate (oFrontend, businessDomainID);
</code></pre><h5 id="filemetaupate-1" tabindex="-1">FileMetaUpate () <a class="header-anchor" href="#filemetaupate-1" aria-label="Permalink to &quot;FileMetaUpate ()&quot;">​</a></h5><p>构造一个FileMetaUpate对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileMetaUpate ();
</code></pre><h4 id="属性-2" tabindex="-1">属性 <a class="header-anchor" href="#属性-2" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-2" tabindex="-1">frontend <a class="header-anchor" href="#frontend-2" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-2" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-2" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要更新元数据的文件所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid-1" tabindex="-1">fileID <a class="header-anchor" href="#fileid-1" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要进行元数据更新的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="filename-2" tabindex="-1">fileName <a class="header-anchor" href="#filename-2" aria-label="Permalink to &quot;fileName&quot;">​</a></h5><p>设置要更新的文件名称。</p><pre><code>public String fileName { set; get; }
</code></pre><h5 id="filesuffix-2" tabindex="-1">fileSuffix <a class="header-anchor" href="#filesuffix-2" aria-label="Permalink to &quot;fileSuffix&quot;">​</a></h5><p>设置要更新的文件扩展名。如：&quot;doc&quot;，&quot;pdf&quot;，&quot;mp3&quot;等。</p><pre><code>public String fileSuffix { set; get; }
</code></pre><h5 id="filedescription-2" tabindex="-1">fileDescription <a class="header-anchor" href="#filedescription-2" aria-label="Permalink to &quot;fileDescription&quot;">​</a></h5><p>设置要更新的文件描述信息。fileDescription的信息将被区块链加密保存，只有文件所有者和拥有文件读取权限方可获得相应的明文信息。</p><p>如果想要对链上已保存的fileDescription进行清空处理，则此属性需设置NULL。</p><pre><code>public String fileDescription { set; get; }
</code></pre><h5 id="fileproperty-2" tabindex="-1">fileProperty <a class="header-anchor" href="#fileproperty-2" aria-label="Permalink to &quot;fileProperty&quot;">​</a></h5><p>设置要更新的文件附属属性信息。附属属性建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。fileProperty的信息将被区块链加密保存，只有文件所有者和拥有文件读取权限方可获得相应的明文信息。</p><p>如果想要对链上已保存的fileProperty进行清空处理，则此属性需设置NULL。</p><pre><code>public String fileProperty { set; get; }
</code></pre><h5 id="ownerid-2" tabindex="-1">ownerID <a class="header-anchor" href="#ownerid-2" aria-label="Permalink to &quot;ownerID&quot;">​</a></h5><p>设置提交上链交易的文件所有者数字身份标识，必须是owners中的一个数字身份标识。</p><pre><code>public String ownerID { set; get; }
</code></pre><p>示例：</p><pre><code>String ownerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
oFileMetaUpate.ownerID = ownerID;
</code></pre><h5 id="eventcontext-2" tabindex="-1">EventContext <a class="header-anchor" href="#eventcontext-2" aria-label="Permalink to &quot;EventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//上链更新元数据的文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oFileMetaUpate.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法-2" tabindex="-1">方法 <a class="header-anchor" href="#方法-2" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="submit-2" tabindex="-1">submit <a class="header-anchor" href="#submit-2" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;文件元数据更新&quot;上链交易请求，开始进行文件元数据更新链上操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit(String ownerPrivateKey);
</code></pre><p><strong>参数</strong></p><p>ownerPrivateKey String</p><p>设置要进行元数据更新的文件所有者的数字身份私钥，ownerID对应的私钥。私钥用于对&quot;文件元数据更新&quot;上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--链上文件所有者数字身份私钥
String ownerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行文件元数据更新上链操作提交
oFileMetaUpate.submit (ownerPrivateKey);
</code></pre><h5 id="createtxbody-2" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-2" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;文件元数据更新&quot;链上操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;文件元数据更新&quot;上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;文件元数据更新&quot;上链交易体
String fileMetaUpdateTxBody= oFileMetaUpate.createTxBody();
//用文件所有者数字身份对&quot;文件元数据更新&quot;上链交易体进行签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;

//--对&quot;文件元数据更新&quot;上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(fileMetaUpdateTxBody, ownerPrivateKey);
</code></pre><h5 id="submittxbody-2" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-2" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用文件元数据更新上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交&quot;文件元数据更新&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submitTxBody(String fileMetaUpdateTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>fileMetaUpdateTxBody String</p><p>文件元数据更新上链交易体原文</p><p>txSign String</p><p>文件元数据更新上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备文件元数据更新上链交易体
FileMetaUpdate oPrepareFMetaUpdTxBody = new FileMetaUpdate();
oPrepareFileUploadTxBody.fileID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareFileUploadTxBody.ownerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
oPrepareFMetaUpdTxBody.fileDescription = &quot;这是一个赋强公证申请表-2.0版本&quot;;
oPrepareFMetaUpdTxBody.fileProperty = &quot;{&#39;接收单位&#39;: &#39;公证处&#39;, &#39;服务对象-新加字段&#39;: &#39;个人&#39;}&quot;;

String fileMetaUpdTxBody = oPrepareFMetaUpdTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行fileMetaUpdTxBody签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
String txSign = CryptoUtil.crypto.signature(fileMetaUpdTxBody, ownerPrivateKey);

//【程序A】提交文件元数据更新上链交易，并跟踪链上处理状态
FileMetaUpdate oFileMetaUpdate = new FileUpload (frontendServer, businessDomainID);
oFileMetaUpdate.eventContext =fileIDFromCaller;
oFileMetaUpdate.submitTxBody (fileMetaUpdTxBody, txSign);
</code></pre><h4 id="事件-2" tabindex="-1">事件 <a class="header-anchor" href="#事件-2" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-2" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-2" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在文件元数据上链更新成功，并获得落块确认时发生。</p><pre><code>public void onTxBlockConfirm(FileTxStatus fMetaUpdStatus, Object context);
</code></pre><p>参数</p><p>fMetaUpdStatus FileTxStatus</p><p>包含&quot;文件元数据更新&quot;链上操作的当前处理状态信息的对象。</p><p>fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileMetaUpate oFileMetaUpate = new FileMetaUpate() {
    @Override
    public void onTxBlockConfirm(FileTxStatus fMetaUpdStatus, Object context) {
       //事件触发条件：文件元数据上链更新成功，并获得落块确认。
       FileTxBlockInfo oFileTxBlockInfo = fMetaUpdStatus.txBlockData;
       System.out.println(&quot;文件链上ID =&quot; + fMetaUpdStatus.fileID);
       System.out.println(&quot;文件当前版本ID =&quot; + oFileTxBlockInfo.versionID);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-2" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-2" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在文件元数据更新上链交易落块确认失败，上链更新的文件元数据被链回滚时发生。事件触发后，会返回错误信息。文件元数据更新上链交易请求需重新提交。</p><pre><code>public void onTxBlockCfmFailure(FileTxStatus fMetaUpdStatus, Object context);
</code></pre><p>参数</p><p>fMetaUpdStatus FileTxStatus</p><p>包含&quot;文件元数据更新&quot;链上操作的当前处理状态信息的对象。</p><p>fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileMetaUpate oFileMetaUpate = new FileMetaUpate() {
    @Override
    public void onTxBlockCfmFailure(FileTxStatus fMetaUpdStatus, Object context) {
       //事件触发条件：文件元数据更新上链交易落块确认失败，上链更新的文件元数据被链回滚。
       //事件触发后，会返回错误信息。文件元数据更新上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fMetaUpdStatus.txBlockData;
       System.out.println(&quot;文件元数据更新上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;文件元数据更新上链交易落块确认失败的返回结果=&quot; + fMetaUpdStatus.message);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxsendsuccess-2" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-2" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在文件元数据更新上链交易发送成功，等待区块链执行处理时发生。</p><pre><code>public void onTxSendSuccess(FileTxStatus fMetaUpdStatus, Object context);
</code></pre><p>参数</p><p>fMetaUpdStatus FileTxStatus</p><p>包含&quot;文件元数据更新&quot;链上操作的当前处理状态信息的对象。</p><p>fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileMetaUpate oFileMetaUpate = new FileMetaUpate(){
    @Override
    public void onTxSendSuccess(FileTxStatus fMetaUpdStatus, Object context) {
       //事件触发条件：文件元数据更新上链交易发送成功，等待区块链执行处理。 
       FileTxBlockInfo oFileTxBlockInfo = fMetaUpdStatus.txBlockData;
       System.out.println(&quot;文件元数据更新上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-2" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-2" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在文件元数据更新上链交易发送失败时发生。文件元数据更新上链交易请求需重新提交。</p><pre><code>public void onTxSendFailure(FileTxStatus fMetaUpdStatus, Object context);
</code></pre><p>参数</p><p>fMetaUpdStatus FileTxStatus</p><p>包含&quot;文件元数据更新&quot;链上操作的当前处理状态信息的对象。</p><p>fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileMetaUpate oFileMetaUpate = new FileMetaUpate() {
    @Override
    public void onTxSendFailure(FileTxStatus fMetaUpdStatus, Object context) {
       //事件触发条件：文件元数据更新上链交易发送失败。
       System.out.println(&quot;文件元数据更新上链交易发送失败的返回结果=&quot; + fMetaUpdStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-2" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-2" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在文件元数据更新上链交易执行成功，文件元数据上链更新成功，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(FileTxStatus fMetaUpdStatus, Object context);
</code></pre><p>参数</p><p>fMetaUpdStatus FileTxStatus</p><p>包含&quot;文件元数据更新&quot;链上操作的当前处理状态信息的对象。</p><p>fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，fileID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileMetaUpate oFileMetaUpate = new FileMetaUpate(){
    @Override
    public void onTxExecSuccess(FileTxStatus fMetaUpdStatus, Object context) {
       //事件触发条件：文件元数据更新上链交易执行成功，文件元数据上链更新成功，等待落块确认。
       FileTxBlockInfo oFileTxBlockInfo = fMetaUpdStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;文件版本ID=&quot; + oFileTxBlockInfo.versionID);
       System.out.println(&quot;文件元数据更新上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oFileTxBlockInfo.txExecTimestamp.toString());
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oFileTxBlockInfo.blockedTimestamp.toString());
       System.out.println(&quot;交易所在区块高度=&quot; + oFileTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure-2" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-2" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在文件元数据更新上链交易执行失败，文件元数据未上链更新时发生。事件触发后会返回错误信息。文件元数据上链交易请求需重新提交。</p><pre><code>public void onTxExecFailure(FileTxStatus fMetaUpdStatus, Object context);
</code></pre><p>参数</p><p>fMetaUpdStatus FileTxStatus</p><p>包含&quot;文件元数据更新&quot;链上操作的当前处理状态信息的对象。</p><p>fMetaUpdStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileMetaUpate oFileMetaUpate = new FileMetaUpate(){
    @Override
    public void onTxExecFailure(FileTxStatus fMetaUpdStatus, Object context) {
       //事件触发条件：文件元数据更新上链交易执行失败，文件元数据未上链更新。
       FileTxBlockInfo oFileTxBlockInfo = fMetaUpdStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件元数据更新上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + fMetaUpdStatus.message);
    }
}
</code></pre><h5 id="onerror-2" tabindex="-1">onError <a class="header-anchor" href="#onerror-2" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileMetaUpate调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>FileMetaUpate oFileMetaUpate = new FileMetaUpate() {
    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：FileMetaUpdate调用出现异常。并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="filetxstatus-status状态编码-2" tabindex="-1">FileTxStatus.status状态编码 <a class="header-anchor" href="#filetxstatus-status状态编码-2" aria-label="Permalink to &quot;FileTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收文件元数据更新上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收文件元数据更新上链交易请求失败，文件元数据更新上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>文件元数据更新上链交易执行成功，文件元数据上链更新成功，等待落块确认。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td>文件元数据更新上链交易执行失败，文件元数据未上链更新。文件元数据更新上链交易请求需重新提交。</td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>文件元数据上链更新成功，并获得落块确认。</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td>因落块确认失败，上链更新的文件元数据被链回滚。文件元数据更新上链交易请求需重新提交。</td></tr></tbody></table><h3 id="fileauthorise" tabindex="-1">FileAuthorise <a class="header-anchor" href="#fileauthorise" aria-label="Permalink to &quot;FileAuthorise&quot;">​</a></h3><p>用于进行文件授权的操作对象。</p><h4 id="构造函数-3" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-3" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="fileauthorise-frontend-string" tabindex="-1">FileAuthorise (Frontend, String) <a class="header-anchor" href="#fileauthorise-frontend-string" aria-label="Permalink to &quot;FileAuthorise (Frontend, String)&quot;">​</a></h5><pre><code>public FileAuthorise (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileAuthorise oFileAuthorise = new FileAuthorise (oFrontend, businessDomainID);
</code></pre><h5 id="fileauthorise-1" tabindex="-1">FileAuthorise () <a class="header-anchor" href="#fileauthorise-1" aria-label="Permalink to &quot;FileAuthorise ()&quot;">​</a></h5><p>构造一个FileAuthorise对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileAuthorise ();
</code></pre><h4 id="属性-3" tabindex="-1">属性 <a class="header-anchor" href="#属性-3" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-3" tabindex="-1">frontend <a class="header-anchor" href="#frontend-3" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-3" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-3" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要进行文件授权的文件所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid-2" tabindex="-1">fileID <a class="header-anchor" href="#fileid-2" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要进行文件授权的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="grantorid" tabindex="-1">grantorID <a class="header-anchor" href="#grantorid" aria-label="Permalink to &quot;grantorID&quot;">​</a></h5><p>设置提交上链交易的授权者数字身份标识，必须是owners或sharers中的一个数字身份标识。</p>`,581),c=e("ul",{"set;":"","get;":""},[e("li",null,[e("p",null,"文件所有者可以授权分享者列表和读取者列表。")]),e("li",null,[e("p",null,"文件分享者可以授权读取者列表。"),e("p",null,"public String grantorID")])],-1),l=t(`<h5 id="eventcontext-3" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-3" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要授予文件授权的文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oFileAuthorise.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法-3" tabindex="-1">方法 <a class="header-anchor" href="#方法-3" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="addreaders" tabindex="-1">addReaders <a class="header-anchor" href="#addreaders" aria-label="Permalink to &quot;addReaders&quot;">​</a></h5><p>设置要授予文件读取权限的数字身份标识列表。</p><pre><code>public void addReaders { String[] readers };
</code></pre><p><strong>参数</strong></p><p>readers String[]</p><p>要授予文件读取权限的数字身份标识。</p><p><strong>示例：</strong></p><pre><code>//设置要授予文件读取权限的数字身份标识列表
String[] readerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oFileAuthorise.addReaders(readerIDs);
</code></pre><h5 id="addsharers" tabindex="-1">addSharers <a class="header-anchor" href="#addsharers" aria-label="Permalink to &quot;addSharers&quot;">​</a></h5><p>设置要授予文件分享权限的数字身份标识列表。</p><pre><code>public void addSharers { String[] Sharers };
</code></pre><p><strong>参数</strong></p><p>Sharers String[]</p><p>要授予文件分享权限的数字身份标识。</p><p><strong>示例：</strong></p><pre><code>//设置要授予文件分享权限的数字身份标识列表
String[] sharerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oFileAuthorise.addSharers (sharerIDs);
</code></pre><h5 id="addowners" tabindex="-1">addOwners <a class="header-anchor" href="#addowners" aria-label="Permalink to &quot;addOwners&quot;">​</a></h5><p>设置要授予文件所有者权限的数字身份标识列表。</p><pre><code>public void addOwners { String[] Owners };
</code></pre><p><strong>参数</strong></p><p>Owners String[]</p><p>要授予文件所有者权限的数字身份标识。</p><p><strong>示例：</strong></p><pre><code>//设置要授予文件所有者权限的数字身份标识列表
String[] ownerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oFileAuthorise.addOwners(ownerIDs);
</code></pre><h5 id="removereaders" tabindex="-1">removeReaders <a class="header-anchor" href="#removereaders" aria-label="Permalink to &quot;removeReaders&quot;">​</a></h5><p>设置要删除文件读取权限的数字身份标识列表。</p><pre><code>public void removeReaders { String[] Readers };
</code></pre><p><strong>示例：</strong></p><pre><code>//设置要删除文件读取权限的数字身份标识列表
String[] readerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oFileAuthorise.removeReaders(readerIDs);
</code></pre><h5 id="removesharers" tabindex="-1">removeSharers <a class="header-anchor" href="#removesharers" aria-label="Permalink to &quot;removeSharers&quot;">​</a></h5><p>设置要删除文件分享权限的数字身份标识列表。</p><pre><code>public void removeSharers { String[] Sharers };
</code></pre><p><strong>示例：</strong></p><pre><code>//设置要删除文件分享权限的数字身份标识列表
String[] sharerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oFileAuthorise.removeSharers(sharerIDs);
</code></pre><h5 id="removeowners" tabindex="-1">removeOwners <a class="header-anchor" href="#removeowners" aria-label="Permalink to &quot;removeOwners&quot;">​</a></h5><p>设置要删除文件所有者权限的数字身份标识列表。</p><pre><code>public void removeOwners { String[] Owners };
</code></pre><p><strong>示例：</strong></p><pre><code>//设置要删除文件所有者的数字身份标识列表
String[] ownerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oFileAuthorise.removeOwners(ownerIDs);
</code></pre><h5 id="createtxbody-3" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-3" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;文件授权&quot;链上操作对应的上链交易体，以便使用grantorID对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;文件授权&quot;上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;文件授权&quot;上链交易体
String fileAuthoriseTxBody= oFileAuthorise.createTxBody();
//用grantorID中的数字身份对&quot;文件授权&quot;上链交易体进行签名
String grantorPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;

//--对&quot;文件授权&quot;上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(fileAuthoriseTxBody, grantorPrivateKey);
</code></pre><h5 id="submit-3" tabindex="-1">submit <a class="header-anchor" href="#submit-3" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;文件授权&quot;上链交易请求，开始进行文件授权链上操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit (String grantorPrivateKey);
</code></pre><p><strong>参数</strong></p><p>grantorPrivateKey String</p><p>grantorID对应的数字身份私钥。私钥用于对&quot;文件授权&quot;上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--提交上链交易的授权者数字身份私钥（即链上文件所有者或分享者中的一个数字身份标识）
String grantorPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行文件授权上链操作提交
oFileAuthorise.submit (grantorPrivateKey);
</code></pre><h5 id="submittxbody-3" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-3" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用文件授权上链交易体原文和grantorID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交&quot;文件授权&quot;上链交易请求。调用此方法，onTxBlockConfirm、onTxSendSuccess等事件不会被触发。</p><pre><code>public FileTxStatus submitTxBody(String fileAuthoriseTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>fileAuthoriseTxBody String</p><p>文件授权上链交易体原文</p><p>txSign String</p><p>文件授权上链交易体签名结果信息</p><p><strong>返回</strong></p><p>FileTxStatus</p><p>包含&quot;文件授权&quot;链上操作的当前处理状态信息的对象。</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备文件授权上链交易体
FileAuthorise oPrepareFileAuthTxBody = new FileAuthorise();
oPrepareFileAuthTxBody.fileID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareFileAuthTxBody.grantorID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String[] readerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oPrepareFileAuthTxBody.addReaders = readerIDs;

String fileAuthoriseTxBody = oPrepareFileAuthTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行fileAuthoriseTxBody签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
String txSign = CryptoUtil.crypto.signature(fileAuthoriseTxBody, ownerPrivateKey);

//【程序A】提交文件授权上链交易，并跟踪链上处理状态
FileAuthorise oFileAuthorise = new FileAuthorise (frontendServer, businessDomainID);
oFileAuthorise.eventContext =fileIDFromCaller;
FileTxStatus oFileTxStatus = oFileAuthorise.submitTxBody(fileAuthoriseTxBody, txSign);
oFileTxStatus = oFileAuthorise.getAuthoriseStatus ();
</code></pre><h4 id="事件-3" tabindex="-1">事件 <a class="header-anchor" href="#事件-3" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-3" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-3" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在文件授权上链交易执行成功，并获得落块确认时发生。</p><pre><code>public void onTxBlockConfirm(FileTxStatus fAuthStatus, Object context);
</code></pre><p>参数</p><p>fAuthStatus FileTxStatus</p><p>包含&quot;文件授权&quot;链上操作的当前处理状态信息的对象。</p><p>fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileAuthorise oFileAuthorise = new FileAuthorise() {
    @Override
    public void onTxBlockConfirm(FileTxStatus fAuthStatus, Object context) {
       //事件触发条件：文件授权上链交易执行成功，并获得落块确认。
       FileTxBlockInfo oFileTxBlockInfo = fAuthStatus.txBlockData;
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-3" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-3" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在文件授权上链交易执行失败，上链保存的文件授权被链回滚。事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。</p><pre><code>public void onTxBlockCfmFailure(FileTxStatus fAuthStatus, Object context);
</code></pre><p>参数</p><p>fAuthStatus FileTxStatus</p><p>包含&quot;文件授权&quot;链上操作的当前处理状态信息的对象。</p><p>fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileAuthorise oFileAuthorise = new FileAuthorise() {
    @Override
    public void onTxBlockCfmFailure(FileTxStatus fAuthStatus, Object context) {
       //事件触发条件：文件授权上链交易执行失败，上链保存的文件授权被链回滚。
       //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fAuthStatus.txBlockData;
       System.out.println(&quot;文件授权上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;文件授权上链交易执行失败的返回结果=&quot; + fAuthStatus.message);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxsendsuccess-3" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-3" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在文件授权上链交易发送成功，等待区块链执行处理时发生。</p><pre><code>public void onTxSendSuccess(FileTxStatus fAuthStatus, Object context);
</code></pre><p>参数</p><p>fAuthStatus FileTxStatus</p><p>包含&quot;文件授权&quot;链上操作的当前处理状态信息的对象。</p><p>fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileAuthorise oFileAuthorise = new FileAuthorise() {
    @Override
    public void onTxSendSuccess(FileTxStatus fAuthStatus, Object context) {
       //事件触发条件：文件授权上链交易发送成功，等待区块链执行处理。 
       FileTxBlockInfo oFileTxBlockInfo = fAuthStatus.txBlockData;
       System.out.println(&quot;文件授权上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-3" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-3" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在文件授权上链交易发送失败时发生。文件授权上链交易请求需重新提交。</p><pre><code>public void onTxSendFailure(FileTxStatus fAuthStatus, Object context);
</code></pre><p>参数</p><p>fAuthStatus FileTxStatus</p><p>包含&quot;文件授权&quot;链上操作的当前处理状态信息的对象。</p><p>fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileAuthorise oFileAuthorise = new FileAuthorise() {
    @Override
    public void onTxSendFailure (FileTxStatus fAuthStatus, Object context) {
       //事件触发条件：文件授权上链交易发送失败。
       //事件触发后，会返回错误信息。
       System.out.println(&quot;文件授权上链交易发送失败的返回结果=&quot; + fAuthStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-3" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-3" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在文件授权上链交易执行成功，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(FileTxStatus fAuthStatus, Object context);
</code></pre><p>参数</p><p>fAuthStatus FileTxStatus</p><p>包含&quot;文件授权&quot;链上操作的当前处理状态信息的对象。</p><p>fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileAuthorise oFileAuthorise = new FileAuthorise() {
    @Override
    public void onTxExecSuccess (FileTxStatus fAuthStatus, Object context) {
       //事件触发条件：文件授权上链交易执行成功，等待落块确认。
       FileTxBlockInfo oFileTxBlockInfo = fAuthStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;文件授权上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oFileTxBlockInfo.txExecTimestamp.toString());
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oFileTxBlockInfo.blockedTimestamp.toString());
       System.out.println(&quot;交易所在区块高度=&quot; + oFileTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure-3" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-3" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在文件授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效时发生。事件触发后会返回错误信息。文件授权上链交易请求需重新提交。</p><pre><code>public void onTxExecFailure(FileTxStatus fAuthStatus, Object context);
</code></pre><p>参数</p><p>fAuthStatus FileTxStatus</p><p>包含&quot;文件授权&quot;链上操作的当前处理状态信息的对象。</p><p>fAuthStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileAuthorise oFileAuthorise = new FileAuthorise() {
    @Override
    public void onTxExecFailure (FileTxStatus fAuthStatus, Object context) {
       //事件触发条件：文件授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效。 
       //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fAuthStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件授权上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + fAuthStatus.message);
    }
}
</code></pre><h5 id="onerror-3" tabindex="-1">onError <a class="header-anchor" href="#onerror-3" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileAuthorise调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>FileAuthorise oFileAuthorise = new FileAuthorise() {
    @Override
    public void onError (TxException e, Object context) {
       //事件触发条件：FileAuthorise调用出现异常。并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="filetxstatus-status状态编码-3" tabindex="-1">FileTxStatus.status状态编码 <a class="header-anchor" href="#filetxstatus-status状态编码-3" aria-label="Permalink to &quot;FileTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收文件授权上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收文件授权上链交易请求失败，文件授权上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>文件授权上链交易执行成功，文件读取/所有者权限的数字身份标识列表上链更新成功，等待落块确认。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td></td></tr><tr><td>文件授权上链交易执行失败，文件读取/所有者权限的数字身份标识列表未上链更新。文件授权上链交易请求需重新提交。</td><td></td><td></td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>文件授权上链更新成功，并获得落块确认。</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td></td></tr><tr><td>因落块确认失败，上链更新的文件读取/所有者权限的数字身份标识列表被链回滚。文件授权上链交易请求需重新提交。</td><td></td><td></td></tr></tbody></table><h3 id="filemetafetch" tabindex="-1">FileMetaFetch <a class="header-anchor" href="#filemetafetch" aria-label="Permalink to &quot;FileMetaFetch&quot;">​</a></h3><p>用于进行文件元数据获取的操作对象。</p><h4 id="构造函数-4" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-4" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="filemetafetch-frontend-string" tabindex="-1">FileMetaFetch (Frontend, String) <a class="header-anchor" href="#filemetafetch-frontend-string" aria-label="Permalink to &quot;FileMetaFetch (Frontend, String)&quot;">​</a></h5><pre><code>public FileMetaFetch (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上查询请求前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileMetaFetch oFileMetaFetch = new FileMetaFetch(oFrontend, businessDomainID);
</code></pre><h5 id="filemetafetch-1" tabindex="-1">FileMetaFetch () <a class="header-anchor" href="#filemetafetch-1" aria-label="Permalink to &quot;FileMetaFetch ()&quot;">​</a></h5><p>构造一个FileMetaFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileMetaFetch ();
</code></pre><h4 id="属性-4" tabindex="-1">属性 <a class="header-anchor" href="#属性-4" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-4" tabindex="-1">frontend <a class="header-anchor" href="#frontend-4" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-4" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-4" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要进行文件元数据获取的文件所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid-3" tabindex="-1">fileID <a class="header-anchor" href="#fileid-3" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要进行文件元数据获取的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="versionid" tabindex="-1">versionID <a class="header-anchor" href="#versionid" aria-label="Permalink to &quot;versionID&quot;">​</a></h5><p>设置要获取的链上文件指定版本的元数据的文件版本ID。如果此属性不赋值，则默认返回最新版本（即当前版本）的文件元数据信息。</p><pre><code>public String versionID { set; get; }
</code></pre><h5 id="fetcherid" tabindex="-1">fetcherID <a class="header-anchor" href="#fetcherid" aria-label="Permalink to &quot;fetcherID&quot;">​</a></h5><p>设置要进行文件元数据获取的获取者数字身份标识。文件获取者必须拥有文件读取权限，owners、sharers、readers中的一个数字身份标识。</p><pre><code>public String fetcherID { set; get; }
</code></pre><h5 id="eventcontext-4" tabindex="-1">EventContext <a class="header-anchor" href="#eventcontext-4" aria-label="Permalink to &quot;EventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要获取文件元数据获取的文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oFileMetaFetch.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法-4" tabindex="-1">方法 <a class="header-anchor" href="#方法-4" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="query" tabindex="-1">query <a class="header-anchor" href="#query" aria-label="Permalink to &quot;query&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;文件元数据获取&quot;链上查询请求，开始进行文件元数据获取链上操作。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void query(String fetcherPrivateKey);
</code></pre><p><strong>参数</strong></p><p>fetcherPrivateKey String</p><p>设置要进行文件元数据获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对&quot;文件元数据获取&quot;链上查询请求进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--获取者数字身份私钥
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
FileMetaFetch oFileMetaFetch = new FileMetaFetch() {
    @Override
    public void onSuccess(FileMetaFetchStatus fmFetchStatus, Object context) {
      //事件触发条件：仅在采用异步查询方法时才会被触发
    }
};

//进行&quot;文件元数据获取&quot;链上操作提交
oFileMetaFetch.query (fetcherPrivateKey);
</code></pre><h5 id="createrqbody" tabindex="-1">createRqBody <a class="header-anchor" href="#createrqbody" aria-label="Permalink to &quot;createRqBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;文件元数据获取&quot;链上操作对应的链上查询请求体，以便使用获取者数字身份对应的私钥对链上查询请求体进行确权签名。</p><pre><code>public String createRqBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;文件元数据获取&quot;链上查询请求体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;文件元数据获取&quot;链上查询请求体
String fmFetchRqBody= oFileMetaFetch.createRqBody();
//用获取者数字身份对&quot;文件元数据获取&quot;链上查询请求体进行签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(fmFetchRqBody, fetcherPrivateKey);
</code></pre><h5 id="queryrqbody" tabindex="-1">queryRqBody <a class="header-anchor" href="#queryrqbody" aria-label="Permalink to &quot;queryRqBody&quot;">​</a></h5><p>使用文件元数据获取链上查询请求体原文和fetcherID中数字身份对查询请求体的签名结果信息，向指定的前置节点服务器提交&quot;文件元数据获取&quot;链上查询请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void queryRqBody (String fmFetchRqBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>fmFetchRqBody String</p><p>文件元数据获取链上查询请求体原文</p><p>txSign String</p><p>文件元数据获取链上查询请求体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备&quot;文件元数据获取&quot;链上查询请求体
FileMetaFetch oPrepareFMFetchRqBody = new FileMetaFetch();
oPrepareFMFetchRqBody.fileID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareFMFetchRqBody.fetcherID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String fmFetchRqBody = oPrepareFMFetchRqBody.createRqBody ();

//【程序B】在外部使用数字身份签名应用进行fmFetchRqBody签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(fmFetchRqBody, fetcherPrivateKey);

//【程序A】提交&quot;文件元数据获取&quot;链上查询请求，并跟踪链上处理状态
FileMetaFetch oFileMetaFetch = new FileMetaFetch(frontendServer, businessDomainID);
oFileMetaFetch.eventContext =fileIDFromCaller;
oFileMetaFetch.queryRqBody (fmFetchRqBody, txSign);
</code></pre><h4 id="事件-4" tabindex="-1">事件 <a class="header-anchor" href="#事件-4" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="onsuccess" tabindex="-1">onSuccess <a class="header-anchor" href="#onsuccess" aria-label="Permalink to &quot;onSuccess&quot;">​</a></h5><p>此事件在&quot;文件元数据获取&quot;链上操作处理彻底完成，文件元数据已成功下载时发生。</p><pre><code>public void onSuccess (FileMetaFetchStatus fmFetchStatus, Object context);
</code></pre><p>参数</p><p>fmFetchStatus FileMetaFetchStatus</p><p>包含&quot;文件元数据获取&quot;链上操作的当前处理状态信息的对象。</p><p>fmFetchStatus中将包含如下返回信息，详细解释请参看FileMetaFetchStatus对象相关描述：</p><p>| status，errorCode，message，fileMeta |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileMetaFetch oFileMetaFetch = new FileMetaFetch() {
    @Override
    public void onSuccess (FileMetaFetchStatus fmFetchStatus, Object context) {
      //事件触发条件：在&quot;文件元数据获取&quot;链上操作处理彻底完成，文件元数据已成功下载。
      String fileIDFromCaller = context;
      System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
      FileMeta oFileMetadata  = fmFetchStatus.fileMeta;
      System.out.println(&quot;文件链上ID =&quot; + oFileMetadata.fileID);
      System.out.println(&quot;文件版本ID=&quot; + oFileMetadata.versionID);
      System.out.println(&quot;文件名=&quot; + oFileMetadata.fileName);
      System.out.println(&quot;文件附属属性=&quot; + oFileMetadata.fileProperty); 
    }
}
</code></pre><h5 id="onfailure" tabindex="-1">onFailure <a class="header-anchor" href="#onfailure" aria-label="Permalink to &quot;onFailure&quot;">​</a></h5><p>此事件在&quot;文件元数据获取&quot;链上操作处理失败，文件元数据未被下载时发生。</p><pre><code>public void onFailure(FileMetaFetchStatus fmFetchStatus, Object context);
</code></pre><p>参数</p><p>fmFetchStatus FileMetaFetchStatus</p><p>包含&quot;文件元数据获取&quot;链上操作的当前处理状态信息的对象。</p><p>fmFetchStatus中将包含如下返回信息，详细解释请参看FileMetaFetchStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileMetaFetch oFileMetaFetch = new FileMetaFetch() {
    @Override
    public void onFailure (FileMetaFetchStatus fmFetchStatus, Object context) {
      //事件触发条件：在&quot;文件元数据获取&quot;链上操作处理失败，文件元数据未被下载。
      String fileIDFromCaller = context;
      System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
      System.out.println(&quot;查询失败=&quot; + fmFetchStatus.message);
    }
}
</code></pre><h5 id="onerror-4" tabindex="-1">onError <a class="header-anchor" href="#onerror-4" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileMetaFetch调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(FetchException e, Object context);
</code></pre><p>示例：</p><pre><code>FileMetaFetch oFileMetaFetch = new FileMetaFetch() {
    @Override
    public void onError(FetchException e, Object context) {
       //事件触发条件：FileMetaFetch调用出现异常。并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h3 id="filefetch" tabindex="-1">FileFetch <a class="header-anchor" href="#filefetch" aria-label="Permalink to &quot;FileFetch&quot;">​</a></h3><p>用于进行链上文件本体获取的操作对象。</p><h4 id="构造函数-5" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-5" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="filefetch-frontend-string" tabindex="-1">FileFetch(Frontend, String) <a class="header-anchor" href="#filefetch-frontend-string" aria-label="Permalink to &quot;FileFetch(Frontend, String)&quot;">​</a></h5><pre><code>public FileFetch (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交文件本体链上获取请求前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileFetch oFileFetch = new FileFetch(oFrontend, businessDomainID);
</code></pre><h5 id="filefetch-1" tabindex="-1">FileFetch() <a class="header-anchor" href="#filefetch-1" aria-label="Permalink to &quot;FileFetch()&quot;">​</a></h5><p>构造一个FileFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileFetch ();
</code></pre><h4 id="属性-5" tabindex="-1">属性 <a class="header-anchor" href="#属性-5" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-5" tabindex="-1">frontend <a class="header-anchor" href="#frontend-5" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-5" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-5" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要获取本体的文件所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid-4" tabindex="-1">fileID <a class="header-anchor" href="#fileid-4" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要获取本体的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="filepath" tabindex="-1">filePath <a class="header-anchor" href="#filepath" aria-label="Permalink to &quot;filePath&quot;">​</a></h5><p>设置要获取本体后存储路径及名称。</p><pre><code>public String filePath{ set; get; }
</code></pre><h5 id="versionid-1" tabindex="-1">versionID <a class="header-anchor" href="#versionid-1" aria-label="Permalink to &quot;versionID&quot;">​</a></h5><p>设置要获取本体的链上文件指定版本的文件版本ID。如果此属性不赋值，则默认返回最新版本（即当前版本）的文件本体。</p><pre><code>public String versionID { set; get; }
</code></pre><h5 id="fetcherid-1" tabindex="-1">fetcherID <a class="header-anchor" href="#fetcherid-1" aria-label="Permalink to &quot;fetcherID&quot;">​</a></h5><p>设置要进行文件本体获取的获取者数字身份标识。文件本体获取者必须拥有文件读取权限，owners、sharers、readers中的一个数字身份标识。</p><pre><code>public String fetcherID { set; get; }
</code></pre><h5 id="eventcontext-5" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-5" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要获取本体的文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oFileFetch.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法-5" tabindex="-1">方法 <a class="header-anchor" href="#方法-5" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="query-1" tabindex="-1">query <a class="header-anchor" href="#query-1" aria-label="Permalink to &quot;query&quot;">​</a></h5><p>向指定的前置节点服务器提交文件本体链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回获取结果。</p><pre><code>public void query (String fetcherPrivateKey);
</code></pre><p><strong>参数</strong></p><p>fetcherPrivateKey String</p><p>设置要进行文件本体获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对文件本体链上获取请求进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--获取者数字身份私钥
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行&quot;文件本体获取&quot;链上操作提交
oFileFetch.query (fetcherPrivateKey);
</code></pre><h5 id="createrqbody-1" tabindex="-1">createRqBody <a class="header-anchor" href="#createrqbody-1" aria-label="Permalink to &quot;createRqBody&quot;">​</a></h5><p>和前置节点进行交互，生成文件本体链上获取请求体，以便使用fetcherID对应的私钥对文件本体链上获取请求体进行确权签名。</p><pre><code>public String createRqBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的文件本体链上获取请求体。</p><p><strong>示例：</strong></p><pre><code>//生成文件本体链上获取请求体
String fileFetchRqBody= oFileFetch.createRqBody();
//用获取者数字身份对文件本体链上获取请求体进行签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(fileFetchRqBody, fetcherPrivateKey);
</code></pre><h5 id="queryrqbody-1" tabindex="-1">queryRqBody <a class="header-anchor" href="#queryrqbody-1" aria-label="Permalink to &quot;queryRqBody&quot;">​</a></h5><p>使用文件本体链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交文件本体链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回获取结果。</p><pre><code>public void queryRqBody (String fileFetchRqBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>fileFetchRqBody String</p><p>文件本体链上获取请求体原文</p><p>txSign String</p><p>文件本体链上获取请求体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备文件本体链上获取请求体
FileFetch oPrepareFileFetchRqBody = new FileFetch();
oPrepareFileFetchRqBody.fileID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareFileFetchRqBody.fetcherID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String fileFetchRqBody = oPrepareFileFetchRqBody.createRqBody();

//【程序B】在外部使用数字身份签名应用进行fileFetchRqBody签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(fileFetchRqBody, fetcherPrivateKey);

//【程序A】提交文件本体链上获取请求
FileFetch oFileFetch = new FileFetch(frontendServer, businessDomainID);
oFileFetch.eventContext =fileIDFromCaller;
oFileFetch.queryRqBody (fileFetchRqBody, txSign);
</code></pre><h4 id="事件-5" tabindex="-1">事件 <a class="header-anchor" href="#事件-5" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="onsuccess-1" tabindex="-1">onSuccess <a class="header-anchor" href="#onsuccess-1" aria-label="Permalink to &quot;onSuccess&quot;">​</a></h5><p>此事件在&quot;文件本体获取&quot;链上操作处理彻底完成，文件本体已成功下载时发生。</p><pre><code>public void onSuccess (FileFetchStatus fFetchStatus, Object context);
</code></pre><p>参数</p><p>fFetchStatus FileFetchStatus</p><p>包含&quot;文件本体获取&quot;链上操作的当前处理状态信息的对象。</p><p>fFetchStatus中将包含如下返回信息，详细解释请参看FileFetchStatus对象相关描述：</p><p>| status，errorCode，message，fileBody |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileFetch oFileFetch = new FileFetch() {
    @Override
    public void onSuccess(FileFetchStatus fFetchStatus, Object context) {
       //事件触发条件：在&quot;文件本体获取&quot;链上操作处理彻底完成，文件本体已成功下载。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       //下载的文件本体
       File oFile = fFetchStatus.fileBody; 
    }
}
</code></pre><h5 id="onfailure-1" tabindex="-1">onFailure <a class="header-anchor" href="#onfailure-1" aria-label="Permalink to &quot;onFailure&quot;">​</a></h5><p>此事件在&quot;文件本体获取&quot;链上操作处理失败，文件本体未被下载时发生。</p><pre><code>public void onSuccess (FileFetchStatus fFetchStatus, Object context);
</code></pre><p>参数</p><p>fFetchStatus FileFetchStatus</p><p>包含&quot;文件本体获取&quot;链上操作的当前处理状态信息的对象。</p><p>fFetchStatus中将包含如下返回信息，详细解释请参看FileFetchStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileFetch oFileFetch = new FileFetch() {
    @Override
    public void onFailure(FileFetchStatus fFetchStatus, Object context)) {
      //事件触发条件：在&quot;文件本体获取&quot;链上操作处理失败，文件本体未被下载。
      String fileIDFromCaller = context;
      System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
      System.out.println(&quot;查询失败=&quot; + fFetchStatus.message);
    }
}
</code></pre><h5 id="onerror-5" tabindex="-1">onError <a class="header-anchor" href="#onerror-5" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileFetch调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(FetchException e, Object context);
</code></pre><p>示例：</p><pre><code>FileFetch oFileFetch = new FileFetch() {
    @Override
    public void onError(FetchException e, Object context) {
       //事件触发条件：FileFetch调用出现异常。并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h3 id="filedelete" tabindex="-1">FileDelete <a class="header-anchor" href="#filedelete" aria-label="Permalink to &quot;FileDelete&quot;">​</a></h3><p>用于进行结构文件删除的操作对象。</p><h4 id="构造函数-6" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-6" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="filedelete-frontend-string" tabindex="-1">FileDelete (Frontend, String) <a class="header-anchor" href="#filedelete-frontend-string" aria-label="Permalink to &quot;FileDelete (Frontend, String)&quot;">​</a></h5><pre><code>public FileDelete (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交文件删除前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileDelete oFileDelete = new FileDelete(oFrontend, businessDomainID);
</code></pre><h5 id="filedelete-1" tabindex="-1">FileDelete() <a class="header-anchor" href="#filedelete-1" aria-label="Permalink to &quot;FileDelete()&quot;">​</a></h5><p>构造一个FileDelete对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileDelete ();
</code></pre><h4 id="属性-6" tabindex="-1">属性 <a class="header-anchor" href="#属性-6" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-6" tabindex="-1">frontend <a class="header-anchor" href="#frontend-6" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-6" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-6" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要删除文件的链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid-5" tabindex="-1">fileID <a class="header-anchor" href="#fileid-5" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要删除的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="ownerid-3" tabindex="-1">ownerID <a class="header-anchor" href="#ownerid-3" aria-label="Permalink to &quot;ownerID&quot;">​</a></h5><p>设置文件所有者的数字身份标识。只有文件所有者才有权提交文件删除。</p><pre><code>public String ownerID { set; get; }
</code></pre><h5 id="eventcontext-6" tabindex="-1">EventContext <a class="header-anchor" href="#eventcontext-6" aria-label="Permalink to &quot;EventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要删除的文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oFileDelete.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法-6" tabindex="-1">方法 <a class="header-anchor" href="#方法-6" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="submit-4" tabindex="-1">submit <a class="header-anchor" href="#submit-4" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;文件删除&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit(String ownerPrivateKey);
</code></pre><p><strong>参数</strong></p><p>ownerPrivateKey String</p><p>设置要删除的链上文件所有者的数字身份私钥，ownerID对应的私钥。私钥用于对&quot;文件删除&quot;上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--链上文件所有者数字身份私钥
String ownerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行文件删除上链操作提交
oFileDelete.submit (ownerPrivateKey);
</code></pre><h5 id="createtxbody-4" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-4" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;文件删除&quot;链上操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;文件删除&quot;上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;文件删除&quot;上链交易体
String fileDeleteTxBody= oFileDelete.createTxBody();
//用文件所有者数字身份对&quot;文件删除&quot;上链交易体进行签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
//--对&quot;文件删除&quot;上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(fileDeleteTxBody, ownerPrivateKey);
</code></pre><h5 id="submittxbody-4" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-4" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用文件删除上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交&quot;文件删除&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submitTxBody(String FileDeleteTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>FileDeleteTxBody String</p><p>文件删除上链交易体原文</p><p>txSign String</p><p>文件删除上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备文件删除上链交易体
FileDelete oPrepareFileDeleteTxBody = new FileDelete();
oPrepareFileDeleteTxBody.fileID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareFileDeleteTxBody.ownerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 

String fileDeleteTxBody = oPrepareFileDeleteTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行fileDeleteTxBody签名
String ownerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(FileDeleteTxBody, ownerPrivateKey);

//【程序A】提交文件删除上链交易，并跟踪链上处理状态
FileDelete oFileDelete = new FileDelete(frontendServer, businessDomainID);
oFileDelete.eventContext =fileIDFromCaller;
FileTxStatus oFileTxStatus = oFileDelete.submitTxBody (fileDeleteTxBody, txSign);
</code></pre><h4 id="事件-6" tabindex="-1">事件 <a class="header-anchor" href="#事件-6" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-4" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-4" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在文件删除上链交易执行成功，并获得落块确认时发生。</p><pre><code>public void onTxBlockConfirm(FileTxStatus fDeleteStatus, Object context);
</code></pre><p>参数</p><p>fDeleteStatus FileTxStatus</p><p>包含&quot;文件删除&quot;上链交易的当前处理状态信息的对象。</p><p>fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileDelete oFileDelete = new FileDelete() {
   @Override
    public void onTxBlockConfirm(FileTxStatus fDeleteStatus, Object context) {
       //事件触发条件：文件删除上链交易执行成功，并获得落块确认。
       FileTxBlockInfo oFileTxBlockInfo = fDeleteStatus.txBlockData;
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-4" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-4" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在文件删除上链交易落块确认失败，删除状态变更被链回滚时发生。事件触发后，会返回错误信息。文件删除上链交易需重新提交。</p><pre><code>public void onTxBlockCfmFailure(FileTxStatus fDeleteStatus, Object context);
</code></pre><p>参数</p><p>fDeleteStatus FileTxStatus</p><p>包含&quot;文件删除&quot;上链交易的当前处理状态信息的对象。</p><p>fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileDelete oFileDelete = new FileDelete() {
    @Override
    public void onTxBlockCfmFailure(FileTxStatus fDeleteStatus, Object context) {
       //事件触发条件：文件删除上链交易落块确认失败，删除状态变更被链回滚。
       //事件触发后，会返回错误信息。文件删除上链交易请求需重新提交。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       FileTxBlockInfo oFileTxBlockInfo = fDeleteStatus.txBlockData;
       System.out.println(&quot;文件删除上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;文件删除上链交易落块确认失败的返回结果=&quot; + fDeleteStatus.message);
    }
}
</code></pre><h5 id="ontxsendsuccess-4" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-4" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在文件删除上链交易发送成功，等待区块链执行处理时发生。</p><pre><code>public void onTxSendSuccess(FileTxStatus fDeleteStatus, Object context);
</code></pre><p>参数</p><p>fDeleteStatus FileTxStatus</p><p>包含&quot;文件删除&quot;上链交易的当前处理状态信息的对象。</p><p>fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileDelete oFileDelete = new FileDelete() {
    @Override
    public void onTxSendSuccess(FileTxStatus fDeleteStatus, Object context) {
       //事件触发条件：文件删除上链交易发送成功，等待区块链执行处理。 
       FileTxBlockInfo oFileTxBlockInfo = fDeleteStatus.txBlockData;
       System.out.println(&quot;文件删除上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-4" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-4" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在文件删除上链交易发送失败时发生。文件删除上链交易需重新提交。</p><pre><code>public void onTxSendFailure(FileTxStatus fDeleteStatus, Object context);
</code></pre><p>参数</p><p>fDeleteStatus FileTxStatus</p><p>包含&quot;文件删除&quot;上链交易的当前处理状态信息的对象。</p><p>fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileDelete oFileDelete = new FileDelete() {
    @Override
    public void onTxSendFailure (FileTxStatus fDeleteStatus, Object context) {
       //事件触发条件：文件删除上链交易发送失败。
       //事件触发后，会返回错误信息。
       System.out.println(&quot;文件删除上链交易发送失败的返回结果=&quot; + fDeleteStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-4" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-4" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在文件删除上链交易执行成功，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(FileTxStatus fDeleteStatus, Object context);
</code></pre><p>参数</p><p>fDeleteStatus FileTxStatus</p><p>包含&quot;文件删除&quot;上链交易的当前处理状态信息的对象。</p><p>fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileDelete oFileDelete = new FileDelete() {
    @Override
    public void onTxExecSuccess (FileTxStatus fDeleteStatus, Object context) {
       //事件触发条件：文件删除上链交易执行成功，等待落块确认。
       FileTxBlockInfo oFileTxBlockInfo = fDeleteStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;文件删除上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oFileTxBlockInfo.txExecTimestamp);
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oFileTxBlockInfo.blockedTimestamp);
       System.out.println(&quot;交易所在区块高度=&quot; + oFileTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure-4" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-4" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在文件删除上链交易执行失败，删除状态变更未在链上生效时发生。事件触发后会返回错误信息。文件删除上链交易需重新提交。</p><pre><code>public void onTxExecFailure (FileTxStatus fMetaUpdStatus, Object context);
</code></pre><p>参数</p><p>fDeleteStatus FileTxStatus</p><p>包含&quot;文件删除&quot;上链交易的当前处理状态信息的对象。</p><p>fDeleteStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileDelete oFileDelete = new FileDelete() {
    @Override
    public void onTxExecFailure (FileTxStatus fDeleteStatus, Object context) {
       //事件触发条件：文件删除上链交易执行失败，删除状态变更未在链上生效。 
       //事件触发后，会返回错误信息。删除状态变更上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fDeleteStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;删除状态变更上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oFileTxBlockInfo.txExecTimestamp);
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oFileTxBlockInfo.blockedTimestamp);
       System.out.println(&quot;交易所在区块高度=&quot; + oFileTxBlockInfo.blockHeight);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + fDeleteStatus.message);
    }
}
</code></pre><h5 id="onerror-6" tabindex="-1">onError <a class="header-anchor" href="#onerror-6" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileDelete调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError (TxException e, Object context);
</code></pre><p>示例：</p><pre><code>FileDelete oFileDelete = new FileDelete() {
    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：FileDelete调用出现异常。并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="filetxstatus-status状态编码-4" tabindex="-1">FileTxStatus.status状态编码 <a class="header-anchor" href="#filetxstatus-status状态编码-4" aria-label="Permalink to &quot;FileTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收文件删除上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收文件删除上链交易请求失败，文件删除上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>文件删除上链交易执行成功，等待落块确认。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td>文件删除上链交易执行失败，删除状态变更未在链上生效。文件删除上链交易请求需重新提交。</td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>文件删除上链交易执行成功，并获得落块确认</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td>因落块确认失败，删除状态变更被链回滚。文件删除上链交易请求需重新提交。</td></tr></tbody></table><h3 id="fileemptyapply" tabindex="-1">FileEmptyApply <a class="header-anchor" href="#fileemptyapply" aria-label="Permalink to &quot;FileEmptyApply&quot;">​</a></h3><p>用于进行文件本体审批清空申请的操作对象。文件本体清空前必须满足以下条件：</p><ul><li>在进行文件本体清空前文件必须被设置为删除状态，否则区块链判定清空申请失败。</li><li>在文件本体清空申请时，必须将全部所有者列表中的数字身份标识添加至清空审批人列表中，否则区块链判定清空申请失败。</li><li>在文件本体清空申请时，文件本体清空审批人列表中必须包含除所有者之外的数字身份标识参与清空审批，否则区块链判定清空申请失败。</li></ul><h4 id="构造函数-7" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-7" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="fileemptyapply-frontend-string" tabindex="-1">FileEmptyApply (Frontend, String) <a class="header-anchor" href="#fileemptyapply-frontend-string" aria-label="Permalink to &quot;FileEmptyApply (Frontend, String)&quot;">​</a></h5><pre><code>public FileEmptyApply (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交文件本体清空申请前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileEmptyApply oFileEmptyApply = new FileEmptyApply(oFrontend, businessDomainID);
</code></pre><h5 id="fileemptyapply-1" tabindex="-1">FileEmptyApply() <a class="header-anchor" href="#fileemptyapply-1" aria-label="Permalink to &quot;FileEmptyApply()&quot;">​</a></h5><p>构造一个FileEmptyApply对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileEmptyApply ();
</code></pre><h4 id="属性-7" tabindex="-1">属性 <a class="header-anchor" href="#属性-7" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-7" tabindex="-1">frontend <a class="header-anchor" href="#frontend-7" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-7" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-7" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要清空文件本体的链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid-6" tabindex="-1">fileID <a class="header-anchor" href="#fileid-6" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要清空文件本体的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="ownerid-4" tabindex="-1">ownerID <a class="header-anchor" href="#ownerid-4" aria-label="Permalink to &quot;ownerID&quot;">​</a></h5><p>设置文件所有者的数字身份标识。只有文件所有者才有权提交清空申请。</p><pre><code>public String ownerID { set; get; }
</code></pre><h5 id="approvers" tabindex="-1">approvers <a class="header-anchor" href="#approvers" aria-label="Permalink to &quot;approvers&quot;">​</a></h5><p>设置参与清空审批的数字身份标识列表。</p><pre><code>public String[] approvers { set; get; }
</code></pre><p>示例：</p><pre><code>//--设置清空审批人的数字身份标识列表
String[] approverIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oFileEmptyApply.approvers = approverIDs;
</code></pre><h5 id="eventcontext-7" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-7" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要清空文件本体的文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oFileEmptyApply.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法-7" tabindex="-1">方法 <a class="header-anchor" href="#方法-7" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="submit-5" tabindex="-1">submit <a class="header-anchor" href="#submit-5" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;文件本体清空申请&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit(String ownerPrivateKey);
</code></pre><p><strong>参数</strong></p><p>ownerPrivateKey String</p><p>设置要清空的链上文件所有者的数字身份私钥，ownerID对应的私钥。私钥用于对&quot;文件本体清空申请&quot;上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--链上文件所有者数字身份私钥
String ownerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行文件本体清空申请上链操作提交
oFileEmptyApply.submit (ownerPrivateKey);
</code></pre><h5 id="createtxbody-5" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-5" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;文件本体清空申请&quot;链上操作对应的上链交易体，以便使用文件所有者数字身份对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody ();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;文件本体清空申请&quot;上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;文件本体清空申请&quot;上链交易体
String fileEmptyApplyTxBody= oFileEmptyApply.createTxBody();
//用文件所有者数字身份对&quot;文件本体清空申请&quot;上链交易体进行签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;

//对&quot;文件本体清空申请&quot;上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(fileEmptyApplyTxBody, ownerPrivateKey);
</code></pre><h5 id="submittxbody-5" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-5" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用文件本体清空申请上链交易体原文和文件所有者数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交&quot;文件本体清空申请&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submitTxBody (String fileEmptyApplyTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>fileEmptyApplyTxBody String</p><p>文件本体清空申请上链交易体原文</p><p>txSign String</p><p>文件本体清空申请上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备文件本体清空申请上链交易体
FileEmptyApply oPrepareFEmptyApplyTxBody = new FileEmptyApply();
oPrepareFEmptyApplyTxBody.fileID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareFEmptyApplyTxBody.ownerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
//--设置清空审批人的数字身份标识列表
String[] approverIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oPrepareFEmptyApplyTxBody.approvers = approverIDs;
String fEmptyApplyTxBody = oPrepareFEmptyApplyTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行fEmptyApplyTxBody签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
String txSign = CryptoUtil.crypto.signature(fEmptyApplyTxBody, ownerPrivateKey);

//【程序A】提交文件本体清空申请上链交易，并跟踪链上处理状态
FileEmptyApply oFileEmptyApply = new FileEmptyApply(frontendServer, businessDomainID);
oFileEmptyApply.eventContext =fileIDFromCaller;
FileTxStatus oFEmptyApplyStatus = oFileEmptyApply.submitTxBody (fEmptyApplyTxBody, txSign);
</code></pre><h4 id="事件-7" tabindex="-1">事件 <a class="header-anchor" href="#事件-7" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-5" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-5" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在清空申请上链交易执行成功，并获得落块确认时发生。</p><pre><code>public void onTxBlockConfirm (FileTxStatus fEmptyApplyStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApplyStatus FileTxStatus</p><p>包含&quot;文件本体清空申请&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
   @Override
    public void onTxBlockConfirm(FileTxStatus fEmptyApplyStatus, Object context) {
       //事件触发条件：清空申请上链交易执行成功，并获得落块确认。
       FileTxBlockInfo oFileTxBlockInfo = fEmptyApplyStatus.txBlockData;
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-5" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-5" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在清空申请上链交易落块确认失败，清空申请被链回滚时发生。事件触发后，会返回错误信息。清空申请上链交易需重新提交。</p><pre><code>public void onTxBlockCfmFailure(FileTxStatus fEmptyApplyStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApplyStatus FileTxStatus</p><p>包含&quot;文件本体清空申请&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
    @Override
    public void onTxBlockCfmFailure(FileTxStatus fEmptyApplyStatus, Object context) {
       //事件触发条件：清空申请上链交易落块确认失败，清空申请被链回滚。
       //事件触发后，会返回错误信息。清空申请上链交易请求需重新提交。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       FileTxBlockInfo oFileTxBlockInfo = fEmptyApplyStatus.txBlockData;
       System.out.println(&quot;清空申请上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;清空申请上链交易落块确认失败的返回结果=&quot; + fEmptyApplyStatus.message);
    }
}
</code></pre><h5 id="ontxsendsuccess-5" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-5" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在清空申请上链交易发送成功，等待区块链执行处理时发生。</p><pre><code>public void onTxSendSuccess(FileTxStatus fEmptyApplyStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApplyStatus FileTxStatus</p><p>包含&quot;文件本体清空申请&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
    @Override
    public void onTxSendSuccess(FileTxStatus fEmptyApplyStatus, Object context) {
       //事件触发条件：清空申请上链交易发送成功，等待区块链执行处理。 
       FileTxBlockInfo oFileTxBlockInfo = fEmptyApplyStatus.txBlockData;
       System.out.println(&quot;清空申请上链交易Hash =&quot; + fEmptyApplyStatus.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-5" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-5" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在清空申请上链交易发送失败时发生。文件本体清空申请上链交易需重新提交。</p><pre><code>public void onTxSendFailure(FileTxStatus fEmptyApplyStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApplyStatus FileTxStatus</p><p>包含&quot;文件本体清空申请&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
    @Override
    public void onTxSendFailure (FileTxStatus fEmptyApplyStatus, Object context) {
       //事件触发条件：清空申请上链交易发送失败。
       //事件触发后，会返回错误信息。
       System.out.println(&quot;清空申请上链交易发送失败的返回结果=&quot; + fEmptyApplyStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-5" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-5" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在清空申请上链交易执行成功，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(FileTxStatus fEmptyApplyStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApplyStatus FileTxStatus</p><p>包含&quot;文件本体清空申请&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
    @Override
    public void onTxExecSuccess (FileTxStatus fEmptyApplyStatus, Object context) {
       //事件触发条件：清空申请上链交易执行成功，等待落块确认。
       FileTxBlockInfo oFileTxBlockInfo = fEmptyApplyStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;清空申请上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oFileTxBlockInfo.txExecTimestamp);
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oFileTxBlockInfo.blockedTimestamp);
       System.out.println(&quot;交易所在区块高度=&quot; + oFileTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure-5" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-5" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在清空申请上链交易执行失败，清空审批人名单未在链上生效时发生。事件触发后会返回错误信息。文件本体清空申请上链交易需重新提交。</p><pre><code>public void onTxExecFailure(FileTxStatus fEmptyApplyStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApplyStatus FileTxStatus</p><p>包含&quot;文件本体清空申请&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApplyStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
    @Override
    public void onTxExecFailure(FileTxStatus fEmptyApplyStatus, Object context) {
       //事件触发条件：清空申请上链交易执行失败，清空审批人名单未在链上生效。 
       //事件触发后，会返回错误信息。清空申请上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fEmptyApplyStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;清空申请上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oFileTxBlockInfo.txExecTimestamp);
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oFileTxBlockInfo.blockedTimestamp);
       System.out.println(&quot;交易所在区块高度=&quot; + oFileTxBlockInfo.blockHeight);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + fEmptyApplyStatus.message);
    }
}
</code></pre><h5 id="onerror-7" tabindex="-1">onError <a class="header-anchor" href="#onerror-7" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileEmptyApply调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>FileEmptyApply oFileEmptyApply = new FileEmptyApply() {
    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：FileEmptyApply调用出现异常。并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="filetxstatus-status状态编码-5" tabindex="-1">FileTxStatus.status状态编码 <a class="header-anchor" href="#filetxstatus-status状态编码-5" aria-label="Permalink to &quot;FileTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收文件本体清空申请上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收文件本体清空申请上链交易请求失败，文件本体清空申请上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>文件本体清空申请上链交易执行成功，等待落块确认。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td></td></tr><tr><td>文件本体清空申请上链交易执行失败，清空审批人名单未在链上生效。文件本体清空申请上链交易请求需重新提交。</td><td></td><td></td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>文件本体清空申请上链更新成功，并获得落块确认。</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td>因落块确认失败，清空申请被链回滚。文件本体清空申请上链交易请求需重新提交。</td></tr></tbody></table><h3 id="fileemptyapprove" tabindex="-1">FileEmptyApprove <a class="header-anchor" href="#fileemptyapprove" aria-label="Permalink to &quot;FileEmptyApprove&quot;">​</a></h3><p>用于进行文件本体清空审批的操作对象。</p><p>所有文件本体清空审批列表中的审批人必须均同意清空，否则清空申请审批失败。清空申请审批通过后，区块链会将指定的链上文件的所有版本的文件本体彻底从区块链节点网络中清除（即文件本体将不再保存于链上），但文件的所有版本的元数据仍会保留在链上，以便事后审计。</p><h4 id="构造函数-8" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-8" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="fileemptyapprove-frontend-string" tabindex="-1">FileEmptyApprove (Frontend, String) <a class="header-anchor" href="#fileemptyapprove-frontend-string" aria-label="Permalink to &quot;FileEmptyApprove (Frontend, String)&quot;">​</a></h5><pre><code>public FileEmptyApprove (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交文件本体清空审批请求前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove(oFrontend, businessDomainID);
</code></pre><h5 id="fileemptyapprove-1" tabindex="-1">FileEmptyApprove () <a class="header-anchor" href="#fileemptyapprove-1" aria-label="Permalink to &quot;FileEmptyApprove ()&quot;">​</a></h5><p>构造一个FileEmptyApprove对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileEmptyApprove ();
</code></pre><h4 id="属性-8" tabindex="-1">属性 <a class="header-anchor" href="#属性-8" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-8" tabindex="-1">frontend <a class="header-anchor" href="#frontend-8" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-8" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-8" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要进行清空审批的文件所在的链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid-7" tabindex="-1">fileID <a class="header-anchor" href="#fileid-7" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要清空审批的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="approverid" tabindex="-1">approverID <a class="header-anchor" href="#approverid" aria-label="Permalink to &quot;approverID&quot;">​</a></h5><p>设置清空审批人的数字身份标识。</p><pre><code>public String approverID { set; get; }
</code></pre><h5 id="reply" tabindex="-1">reply <a class="header-anchor" href="#reply" aria-label="Permalink to &quot;reply&quot;">​</a></h5><p>设置审批结论（1 同意删除 2 拒绝删除）。</p><pre><code>public String reply { set; get; }
</code></pre><h5 id="eventcontext-8" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-8" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要清空审批的文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
FileEmptyApprove.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法-8" tabindex="-1">方法 <a class="header-anchor" href="#方法-8" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="submit-6" tabindex="-1">submit <a class="header-anchor" href="#submit-6" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;文件本体清空审批&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit(String approverPrivateKey);
</code></pre><p><strong>参数</strong></p><p>approverPrivateKey String</p><p>设置清空审批人的数字身份私钥，approverID对应的私钥。私钥用于对&quot;文件本体清空审批&quot;上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--清空审批人的数字身份私钥
String approverPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行文件本体清空审批上链交易提交
oFEmptyApprove.submit (approverPrivateKey);
</code></pre><h5 id="createtxbody-6" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-6" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;文件本体清空审批&quot;链上操作对应的上链交易体，以便使用approverID对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;文件本体清空审批&quot;上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;文件本体清空审批&quot;上链交易体
String fEmptyApproveTxBody= oFileEmptyApprove.createTxBody();
//用清空审批人数字身份对&quot;文件本体清空审批&quot;上链交易体进行签名
String approverPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
//--对&quot;文件本体清空审批&quot;上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(fEmptyApproveTxBody, approverPrivateKey);
</code></pre><h5 id="submittxbody-6" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-6" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用文件本体清空审批上链交易体原文和approverID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交&quot;文件本体清空审批&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submitTxBody(String fEmptyApproveTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>fEmptyApproveTxBody String</p><p>文件本体清空审批上链交易体原文</p><p>txSign String</p><p>文件本体清空审批上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备文件本体清空审批上链交易体
FileEmptyApprove oPrepareFMTApproveTxBody = new FileEmptyApprove ();
oPrepareFMTApproveTxBody.fileID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareFMTApproveTxBody.approverID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
oPrepareFMTApproveTxBody.reply = 1;

String fEmptyApproveTxBody = oPrepareFMTApproveTxBody.createTxBody ();

//【程序B】在外部使用数字身份签名应用进行fEmptyApproveTxBody签名
String approverPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
String txSign = CryptoUtil.crypto.signature(fEmptyApproveTxBody, approverPrivateKey);

//【程序A】提交文件本体清空审批上链交易，并跟踪链上处理状态
FileEmptyApprove oFEmptyApprove = new FileEmptyApprove(frontendServer, businessDomainID);
oFEmptyApprove.eventContext =fileIDFromCaller;
FileTxStatus oFEmptyApproveStatus = oFEmptyApprove.submitTxBody (fEmptyApproveTxBody, txSign);
</code></pre><h4 id="事件-8" tabindex="-1">事件 <a class="header-anchor" href="#事件-8" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-6" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-6" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在清空审批上链交易执行成功，并获得落块确认时发生。</p><pre><code>public void onTxBlockConfirm(FileTxStatus fEmptyApproveStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApproveStatus FileTxStatus</p><p>包含&quot;文件本体清空审批&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
   @Override
    public void onTxBlockConfirm(FileTxStatus fEmptyAproveStatus, Object context) {
       //事件触发条件：清空审批上链交易执行成功，并获得落块确认。
       FileTxBlockInfo oFileTxBlockInfo = fEmptyAproveStatus.txBlockData;
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-6" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-6" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在清空审批上链交易落块确认失败，清空审批被链回滚时发生。事件触发后，会返回错误信息。清空审批上链交易需重新提交。</p><pre><code>public void onTxBlockCfmFailure(FileTxStatus fEmptyApproveStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApproveStatus FileTxStatus</p><p>包含&quot;文件本体清空审批&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
  @Override
  public void onTxBlockCfmFailure(FileTxStatus fEmptyApproveStatus, Object context) {
     //事件触发条件：清空审批上链交易落块确认失败，清空审批被链回滚。
     //事件触发后，会返回错误信息。清空审批上链交易请求需重新提交。
     String fileIDFromCaller = context;
     System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
     FileTxBlockInfo oFileTxBlockInfo = fEmptyApproveStatus.txBlockData;
     System.out.println(&quot;清空审批上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
     System.out.println(&quot;清空审批上链交易落块确认失败的返回结果=&quot; + fEmptyApproveStatus.message);
  }
}
</code></pre><h5 id="ontxsendsuccess-6" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-6" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在清空审批上链交易发送成功，等待区块链执行处理时发生。</p><pre><code>public void onTxSendSuccess(FileTxStatus fEmptyApproveStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApproveStatus FileTxStatus</p><p>包含&quot;文件本体清空审批&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
    @Override
    public void onTxSendSuccess(FileTxStatus fEmptyApproveStatus, Object context) {
       //事件触发条件：清空审批上链交易发送成功，等待区块链执行处理。 
       FileTxBlockInfo oFileTxBlockInfo = fEmptyApproveStatus.txBlockData;
       System.out.println(&quot;清空审批上链交易Hash =&quot; + oFileTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-6" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-6" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在清空审批上链交易发送失败时发生。事件触发后会返回错误信息。文件本体清空审批上链交易需重新提交。</p><pre><code>public void onTxSendFailure(FileTxStatus fEmptyApproveStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApproveStatus FileTxStatus</p><p>包含&quot;文件本体清空审批&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
    @Override
    public void onTxSendFailure(FileTxStatus fEmptyApproveStatus, Object context) {
       //事件触发条件：清空审批上链交易发送失败。
       //事件触发后，会返回错误信息。
       System.out.println(&quot;清空审批上链交易发送失败的返回结果=&quot; + fEmptyApplyStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-6" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-6" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在清空审批上链交易执行成功，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(FileTxStatus fEmptyApproveStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApproveStatus FileTxStatus</p><p>包含&quot;文件本体清空审批&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，fileID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
    @Override
    public void onTxExecSuccess(FileTxStatus fEmptyApproveStatus, Object context) {
       //事件触发条件：清空审批上链交易执行成功，等待落块确认。
       FileTxBlockInfo oFileTxBlockInfo = fEmptyApproveStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;清空审批上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oFileTxBlockInfo.txExecTimestamp);
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oFileTxBlockInfo.blockedTimestamp);
       System.out.println(&quot;交易所在区块高度=&quot; + oFileTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure-6" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-6" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在清空审批上链交易执行失败，清空审批结果未在链上生效时发生。事件触发后会返回错误信息。文件本体清空审批上链交易需重新提交。</p><pre><code>public void onTxExecFailure(FileTxStatus fEmptyApproveStatus, Object context);
</code></pre><p>参数</p><p>fEmptyApproveStatus FileTxStatus</p><p>包含&quot;文件本体清空审批&quot;上链交易的当前处理状态信息的对象。</p><p>fEmptyApproveStatus中将包含如下返回信息，详细解释请参看FileTxStatus 对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
    @Override
    public void onTxExecFailure(FileTxStatus fEmptyApproveStatus, Object context) {
       //事件触发条件：清空审批上链交易执行失败，清空审批结果未在链上生效。 
       //事件触发后，会返回错误信息。清空审批上链交易请求需重新提交。
       FileTxBlockInfo oFileTxBlockInfo = fEmptyApproveStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;文件链上ID =&quot; + oFileTxBlockInfo.fileID);
       System.out.println(&quot;清空审批上链交易Hash=&quot; + oFileTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oFileTxBlockInfo.txExecTimestamp);
       System.out.println(&quot;交易所在区块hash=&quot; + oFileTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oFileTxBlockInfo.blockedTimestamp);
       System.out.println(&quot;交易所在区块高度=&quot; + oFileTxBlockInfo.blockHeight);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + fEmptyApproveStatus.message);
    }
}
</code></pre><h5 id="onerror-8" tabindex="-1">onError <a class="header-anchor" href="#onerror-8" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileEmptyApprove调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>FileEmptyApprove oFileEmptyApprove = new FileEmptyApprove() {
    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：FileEmptyApprove调用出现异常。并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="filetxstatus-status状态编码-6" tabindex="-1">FileTxStatus.status状态编码 <a class="header-anchor" href="#filetxstatus-status状态编码-6" aria-label="Permalink to &quot;FileTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收文件本体清空审批上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收文件本体清空审批上链交易请求失败，文件本体清空审批上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>文件本体清空审批上链交易执行成功，等待落块确认。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td>文件本体清空审批上链交易执行失败，清空审批结果未在链上生效。清空审批上链交易请求需重新提交。</td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>文件本体清空审批上链交易执行成功，并获得落块确认。</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td>清空审批上链交易落块确认失败，清空审批被链回滚。清空审批上链交易请求需重新提交。</td></tr></tbody></table><h3 id="filedigestcheck" tabindex="-1">FileDigestCheck <a class="header-anchor" href="#filedigestcheck" aria-label="Permalink to &quot;FileDigestCheck&quot;">​</a></h3><p>用于进行链上文件验真的操作对象。</p><h4 id="构造函数-9" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-9" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="filedigestcheck-frontend-string" tabindex="-1">FileDigestCheck (Frontend, String) <a class="header-anchor" href="#filedigestcheck-frontend-string" aria-label="Permalink to &quot;FileDigestCheck (Frontend, String)&quot;">​</a></h5><pre><code>public FileDigestCheck (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上查询请求前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileDigestCheck oFileDigestCheck = new FileDigestCheck(oFrontend, businessDomainID);
</code></pre><h5 id="filedigestcheck-1" tabindex="-1">FileDigestCheck () <a class="header-anchor" href="#filedigestcheck-1" aria-label="Permalink to &quot;FileDigestCheck ()&quot;">​</a></h5><p>构造一个FileDigestCheck对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileDigestCheck ();
</code></pre><h4 id="属性-9" tabindex="-1">属性 <a class="header-anchor" href="#属性-9" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-9" tabindex="-1">frontend <a class="header-anchor" href="#frontend-9" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-9" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-9" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要进行文件验真的文件所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid-8" tabindex="-1">fileID <a class="header-anchor" href="#fileid-8" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要进行文件验真的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="versionid-2" tabindex="-1">versionID <a class="header-anchor" href="#versionid-2" aria-label="Permalink to &quot;versionID&quot;">​</a></h5><p>设置要验证的链上文件指定版本的文件版本ID。如果此属性不赋值，则默认是和链上文件的最新版本（即当前版本）的文件指纹特征信息进行验证。</p><pre><code>public String versionID { set; get; }
</code></pre><h5 id="filedigest" tabindex="-1">fileDigest <a class="header-anchor" href="#filedigest" aria-label="Permalink to &quot;fileDigest&quot;">​</a></h5><p>本地文件的本体指纹特征值，用于验证本地文件是否和链上文件的特定版本的文件本体是否是一致的，是否被篡改过。文件本体内容如有任何微小的变化，对应的指纹特征值就会发生变化。</p><pre><code>public String fileDigest { set; get; }
</code></pre><h4 id="方法-9" tabindex="-1">方法 <a class="header-anchor" href="#方法-9" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="query-2" tabindex="-1">query <a class="header-anchor" href="#query-2" aria-label="Permalink to &quot;query&quot;">​</a></h5><p>以同步调用方式，向指定的前置节点服务器提交&quot;文件验真&quot;链上查询请求，开始进行文件验真链上操作。</p><pre><code>public FileDigestCheckStatus query();
</code></pre><p><strong>返回</strong></p><p>FileDigestCheckStatus</p><p>包含&quot;文件验真&quot;链上操作的查询结果信息。</p><h3 id="fileversionsfetch" tabindex="-1">FileVersionsFetch <a class="header-anchor" href="#fileversionsfetch" aria-label="Permalink to &quot;FileVersionsFetch&quot;">​</a></h3><p>用于进行链上文件历史版本列表获取的操作对象。</p><h4 id="构造函数-10" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-10" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="fileversionsfetch-frontend-string" tabindex="-1">FileVersionsFetch (Frontend, String) <a class="header-anchor" href="#fileversionsfetch-frontend-string" aria-label="Permalink to &quot;FileVersionsFetch (Frontend, String)&quot;">​</a></h5><pre><code>public FileVersionsFetch (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上获取请求前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileVersionsFetch oFileVerFetch = new FileVersionsFetch(oFrontend, businessDomainID);
</code></pre><h5 id="fileversionsfetch-1" tabindex="-1">FileVersionsFetch () <a class="header-anchor" href="#fileversionsfetch-1" aria-label="Permalink to &quot;FileVersionsFetch ()&quot;">​</a></h5><p>构造一个FileVersionsFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileVersionsFetch ();
</code></pre><h4 id="属性-10" tabindex="-1">属性 <a class="header-anchor" href="#属性-10" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-10" tabindex="-1">frontend <a class="header-anchor" href="#frontend-10" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-10" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-10" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要获取文件版本列表的文件所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid-9" tabindex="-1">fileID <a class="header-anchor" href="#fileid-9" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要获取文件版本列表的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="fetcherid-2" tabindex="-1">fetcherID <a class="header-anchor" href="#fetcherid-2" aria-label="Permalink to &quot;fetcherID&quot;">​</a></h5><p>设置要获取文件版本列表的获取者数字身份标识。文件获取者必须拥有文件读取权限，owners、sharers、readers中的一个数字身份标识。</p><pre><code>public String fetcherIDv{ set; get; }
</code></pre><h5 id="eventcontext-9" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-9" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要获取文件版本列表的文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
FileVersionsFetch.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法-10" tabindex="-1">方法 <a class="header-anchor" href="#方法-10" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="query-3" tabindex="-1">query <a class="header-anchor" href="#query-3" aria-label="Permalink to &quot;query&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;文件版本列表获取&quot;链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void query(String fetcherPrivateKey);
</code></pre><p><strong>参数</strong></p><p>fetcherPrivateKey String</p><p>设置要进行文件版本列表获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对&quot;文件版本列表获取&quot;链上获取请求进行签名确权。</p><p><strong>示例：</strong></p><pre><code>FileVersionsFetch oFileVerFetch = new FileVersionsFetch () {
    @Override
    public void onSuccess(FileVersionsFetchStatus fVerFetchStatus, Object context) {
     //事件触发条件：文件版本列表成功下载。
    }
};

//获取者数字身份私钥
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行&quot;文件版本列表获取&quot;链上操作提交
oFileVerFetch.query (fetcherPrivateKey);
</code></pre><h5 id="createrqbody-2" tabindex="-1">createRqBody <a class="header-anchor" href="#createrqbody-2" aria-label="Permalink to &quot;createRqBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;文件版本列表获取&quot;链上操作对应的链上获取请求体，以便使用获取者数字身份对应的私钥对链上获取请求体进行确权签名。</p><pre><code>public String createRqBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;文件版本列表获取&quot;链上获取请求体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;文件版本列表获取&quot;链上获取请求体
String fVerFetchRqBody= oFileVersionsFetch.createRqBody();
//用获取者数字身份对&quot;文件版本列表获取&quot;链上获取请求体进行签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(fVerFetchRqBody, fetcherPrivateKey);
</code></pre><h5 id="queryrqbody-2" tabindex="-1">queryRqBody <a class="header-anchor" href="#queryrqbody-2" aria-label="Permalink to &quot;queryRqBody&quot;">​</a></h5><p>使用文件版本列表获取链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交&quot;文件版本列表获取&quot;链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void queryRqBody (String fVerFetchRqBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>fVerFetchRqBody String</p><p>文件版本列表获取链上获取请求体原文</p><p>txSign String</p><p>文件版本列表获取链上获取请求体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备&quot;文件版本列表获取&quot;链上获取请求体
FileVersionsFetch oPrepareFVerFetchRqBody = new FileVersionsFetch();
oPrepareFVerFetchRqBody.fileID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareFVerFetchRqBody.fetcherID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String fVerFetchRqBody = oPrepareFVerFetchRqBody.createRqBody ();

//【程序B】在外部使用数字身份签名应用进行fVerFetchRqBody签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(fVerFetchRqBody, fetcherPrivateKey);

//【程序A】提交&quot;文件版本列表获取&quot;链上获取请求，并跟踪链上处理状态
FileVersionsFetch oFileVerFetch = new FileVersionsFetch (frontendServer, businessDomainID);
oFileVerFetch.eventContext =fileIDFromCaller;
oFileVerFetch.queryRqBody (fVerFetchRqBody, txSign);
</code></pre><h4 id="事件-9" tabindex="-1">事件 <a class="header-anchor" href="#事件-9" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="onsuccess-2" tabindex="-1">onSuccess <a class="header-anchor" href="#onsuccess-2" aria-label="Permalink to &quot;onSuccess&quot;">​</a></h5><p>此事件在&quot;文件版本列表获取&quot;链上操作处理彻底完成，文件版本列表已成功下载时发生。</p><pre><code>public void onSuccess (FileVersionsFetchStatus fVerFetchStatus, Object context);
</code></pre><p>参数</p><p>fVerFetchStatus FileVersionsFetchStatus</p><p>包含&quot;文件版本列表获取&quot;链上操作的当前处理状态信息的对象。</p><p>fVerFetchStatus中将包含如下返回信息，详细解释请参看FileVersionsFetchStatus对象相关描述：</p><p>| status，errorCode，message，versions |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileVersionsFetch oFileVersionsFetch = new FileVersionsFetch() {
    @Override
    public void onSuccess(FileVersionsFetchStatus fVerFetchStatus, Object context) {
       //事件触发条件：在&quot;获取文件版本列表&quot;成功下载。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       List&lt;FileVersionInfo&gt; oFileVersionInfo = fVerFetchStatus.versions;
       for (int i=0; i&lt; oFileVersionInfo.length; i++) {
         System.out.println(&quot;文件版本标识: &quot; + oFileVersionInfo[i].versionID);
         System.out.println(&quot;文件版本的生成时间戳: &quot; + oFileVersionInfo[i].timestamp);

         //获取指定版本的文件元数据
         FileMetaFetch oFileMetaFetch = new FileMetaFetch();

         //指定获取元数据的链上文件的文件链上ID。
         oFileMetaFetch.fileID = &quot;21b73bac878c04a437b28962e51eb48b28962880&quot;;
         //指定获取元数据的链上文件的文件版本ID。
         oFileMetaFetch.versionID = oFileVersionInfo[i].versionID;
                      ......
         //进行&quot;文件元数据获取&quot;上链操作提交
         FileMetaFetchStatus oFileMetaFetchStatus = oFileMetaFetch.query(readerPrivateKey);
       }
    }
}
</code></pre><h5 id="onfailure-2" tabindex="-1">onFailure <a class="header-anchor" href="#onfailure-2" aria-label="Permalink to &quot;onFailure&quot;">​</a></h5><p>此事件在&quot;获取文件版本列表&quot;链上操作处理失败，文件版本列表未被下载时发生。</p><pre><code>public void onSuccess (FileVersionsFetchStatus fVerFetchStatus, Object context);
</code></pre><p>参数</p><p>fVerFetchStatus FileVersionsFetchStatus</p><p>包含&quot;文件版本列表获取&quot;链上操作的当前处理状态信息的对象。</p><p>fVerFetchStatus中将包含如下返回信息，详细解释请参看FileVersionsFetchStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileVersionsFetch oFileVersionsFetch = new FileVersionsFetch() {
    @Override
    public void onFailure(FileVersionsFetchStatus fVerFetchStatus, Object context) {
      //事件触发条件：在&quot;获取文件版本列表&quot;链上操作处理失败，文件版本列表未被下载。
      String fileIDFromCaller = context;
      System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
      System.out.println(&quot;查询失败=&quot; + fVerFetchStatus.message);
    }
}
</code></pre><h5 id="onerror-9" tabindex="-1">onError <a class="header-anchor" href="#onerror-9" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileVersionsFetch调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(FetchException e, Object context);
</code></pre><p>示例：</p><pre><code>FileVersionsFetch oFileVersionsFetch = new FileVersionsFetch() {
    @Override
    public void onError(FetchException e, Object context) {
       //事件触发条件：FileVersionsFetch调用出现异常。并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h3 id="filerightsfetch" tabindex="-1">FileRightsFetch <a class="header-anchor" href="#filerightsfetch" aria-label="Permalink to &quot;FileRightsFetch&quot;">​</a></h3><p>用于进行链上文件权限列表获取的操作对象。权限列表包括：所有者列表、分享者列表、读取者列表。</p><ul><li>文件所有者有权获取完整的所有者列表和所有者分别授权的读取者列表；完整的分享者列表和分享者分别授权的读取者列表。</li><li>文件分享者有权获取自己授权的读取者列表。</li><li>文件读取者无权获取文件权限列表。</li></ul><h4 id="构造函数-11" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-11" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="filerightsfetch-frontend-string" tabindex="-1">FileRightsFetch (Frontend, String) <a class="header-anchor" href="#filerightsfetch-frontend-string" aria-label="Permalink to &quot;FileRightsFetch (Frontend, String)&quot;">​</a></h5><pre><code>public FileRightsFetch (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上获取请求前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

FileRightsFetch oFileRightsFetch = new FileRightsFetch(oFrontend, businessDomainID);
</code></pre><h5 id="filerightsfetch-1" tabindex="-1">FileRightsFetch () <a class="header-anchor" href="#filerightsfetch-1" aria-label="Permalink to &quot;FileRightsFetch ()&quot;">​</a></h5><p>构造一个FileRightsFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public FileRightsFetch ();
</code></pre><h4 id="属性-11" tabindex="-1">属性 <a class="header-anchor" href="#属性-11" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-11" tabindex="-1">frontend <a class="header-anchor" href="#frontend-11" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-11" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-11" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要获取文件权限列表的文件所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="fileid-10" tabindex="-1">fileID <a class="header-anchor" href="#fileid-10" aria-label="Permalink to &quot;fileID&quot;">​</a></h5><p>设置要获取文件权限列表的链上文件的文件链上ID。</p><pre><code>public String fileID { set; get; }
</code></pre><h5 id="fetcherid-3" tabindex="-1">fetcherID <a class="header-anchor" href="#fetcherid-3" aria-label="Permalink to &quot;fetcherID&quot;">​</a></h5><p>设置要获取文件权限列表的获取者数字身份标识，owners、sharers、readers中的一个数字身份标识。</p><pre><code>public String fetcherID { set; get; }
</code></pre><h5 id="eventcontext-10" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-10" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要获取文件权限列表的文件在链外应用系统数据库中的唯一标识
String fileIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
FileRightsFetch.eventContext =fileIDFromCaller;
</code></pre><h4 id="方法-11" tabindex="-1">方法 <a class="header-anchor" href="#方法-11" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="query-4" tabindex="-1">query <a class="header-anchor" href="#query-4" aria-label="Permalink to &quot;query&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;文件权限列表获取&quot;链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void query(String fetcherPrivateKey);
</code></pre><p><strong>参数</strong></p><p>fetcherPrivateKey String</p><p>设置要进行文件权限列表获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对&quot;文件权限列表获取&quot;链上获取请求进行签名确权。</p><p><strong>示例：</strong></p><pre><code>FileRightsFetch oFileRightsFetch = new FileRightsFetch () {
    @Override
    public void onSuccess(FileRightsFetchStatus fRightsFetchStatus, Object context) {
     //事件触发条件：文件权限列表成功下载。
    }
};

//获取者数字身份私钥
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行&quot;文件权限列表获取&quot;链上操作提交
oFileRightsFetch.query (fetcherPrivateKey);
</code></pre><h5 id="createrqbody-3" tabindex="-1">createRqBody <a class="header-anchor" href="#createrqbody-3" aria-label="Permalink to &quot;createRqBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;文件权限列表获取&quot;链上操作对应的链上获取请求体，以便使用获取者数字身份对应的私钥对链上获取请求体进行确权签名。</p><pre><code>public String createRqBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;文件权限列表获取&quot;链上获取请求体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;文件权限列表获取&quot;链上获取请求体
String fRightsFetchRqBody = oFileRightsFetch.createRqBody ();
//用获取者数字身份对&quot;文件权限列表获取&quot;链上获取请求体进行签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(fRightsFetchRqBody, fetcherPrivateKey);
</code></pre><h5 id="queryrqbody-3" tabindex="-1">queryRqBody <a class="header-anchor" href="#queryrqbody-3" aria-label="Permalink to &quot;queryRqBody&quot;">​</a></h5><p>使用文件权限列表获取链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交&quot;文件权限列表获取&quot;链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void queryRqBody (String fRightsFetchRqBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>fRightsFetchRqBody String</p><p>文件权限列表获取链上获取请求体原文</p><p>txSign String</p><p>文件权限列表获取链上获取请求体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备&quot;文件权限列表获取&quot;链上获取请求体
FileRightsFetch oPrepareFRightsFetchRqBody = new FileRightsFetch();
oPrepareFRightsFetchRqBody.fileID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareFRightsFetchRqBody.fetcherID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String fRightsFetchRqBody = oPrepareFRightsFetchRqBody.createRqBody ();

//【程序B】在外部使用数字身份签名应用进行fRightsFetchRqBody签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(fRightsFetchRqBody, fetcherPrivateKey);

//【程序A】提交&quot;文件权限列表获取&quot;链上获取请求，并跟踪链上处理状态
FileRightsFetch oFileRightsFetch = new FileRightsFetch (frontendServer, businessDomainID);
oFileRightsFetch.eventContext =fileIDFromCaller;
oFileRightsFetch.queryRqBody (fRightsFetchRqBody, txSign);
</code></pre><h4 id="事件-10" tabindex="-1">事件 <a class="header-anchor" href="#事件-10" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="onsuccess-3" tabindex="-1">onSuccess <a class="header-anchor" href="#onsuccess-3" aria-label="Permalink to &quot;onSuccess&quot;">​</a></h5><p>此事件在&quot;文件权限列表获取&quot;链上操作处理彻底完成，文件权限列表已成功下载时发生。</p><pre><code>public void onSuccess (FileRightsFetchStatus fRightsFetchStatus, Object context);
</code></pre><p>参数</p><p>fRightsFetchStatus FileRightsFetchStatus</p><p>包含&quot;文件权限列表获取&quot;链上操作的当前处理状态信息的对象。</p><p>fRightsFetchStatus中将包含如下返回信息，详细解释请参看FileRightsFetchStatus对象相关描述：</p><p>| status，errorCode，message，fileRights |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileRightsFetch oFileRightsFetch = new FileRightsFetch() {
    @Override
    public void onSuccess(FileRightsFetchStatus fRightsFetchStatus, Object context) {
       //事件触发条件：在&quot;获取文件权限列表&quot;成功下载。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       FileRightsInfo oFileRightsInfo = fRightsFetchStatus.fileRights;

       for (int i=0; i&lt; oFileRightsInfo.owners.length; i++) {
         System.out.println(&quot;文件所有者身份标识: &quot; + oFileRightsInfo.owners[i]);
       }

       //文件所有者所授权的分享者列表 
       SharerList[] oSharersSetByOwner = fRightsFetchStatus.sharersByOwner;
       for (int j=0; j&lt; oSharersSetByOwner.length; j++) {
         System.out.println(&quot;有授权分享者的文件所有者数字身份标识=&quot; + oSharersSetByOwner[j].ownerID);
         for (int n=0; n&lt; oSharersSetByOwner[j].sharers.length; n++) {
            System.out.println(&quot;当前文件所有者授权的分享者数字身份标识=&quot; + oSharersSetByOwner[i].sharers[n]);
         }
       }
    }
}
</code></pre><h5 id="onfailure-3" tabindex="-1">onFailure <a class="header-anchor" href="#onfailure-3" aria-label="Permalink to &quot;onFailure&quot;">​</a></h5><p>此事件在&quot;获取文件权限列表&quot;链上操作处理失败，文件权限列表未被下载时发生。</p><pre><code>public void onSuccess (FileRightsFetchStatus fRightsFetchStatus, Object context);
</code></pre><p>参数</p><p>fRightsFetchStatus FileRightsFetchStatus</p><p>包含&quot;获取文件权限列表&quot;链上操作的当前处理状态信息的对象。</p><p>fRightsFetchStatus中将包含如下返回信息，详细解释请参看FileRightsFetchStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>FileRightsFetch oFileRightsFetch = new FileRightsFetch() {
    @Override
    public void onFailure(FileRightsFetchStatus fRightsFetchStatus, Object context) {
      //事件触发条件：在&quot;获取文件权限列表&quot;链上操作处理失败，文件权限列表未被下载。
      String fileIDFromCaller = context;
      System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
      System.out.println(&quot;查询失败=&quot; + fRightsFetchStatus.message);
    }
}
</code></pre><h5 id="onerror-10" tabindex="-1">onError <a class="header-anchor" href="#onerror-10" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在FileRightsFetch调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(FetchException e, Object context);
</code></pre><p>示例：</p><pre><code>FileRightsFetch oFileRightsFetch = new FileRightsFetch() {
    @Override
    public void onError(FetchException e, Object context) {
       //事件触发条件：FileRightsFetch调用出现异常。并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h2 id="com-coolawchain-sdk-structdata" tabindex="-1">com.coolawchain.sdk.structdata <a class="header-anchor" href="#com-coolawchain-sdk-structdata" aria-label="Permalink to &quot;com.coolawchain.sdk.structdata&quot;">​</a></h2><h3 id="dataupload" tabindex="-1">DataUpload <a class="header-anchor" href="#dataupload" aria-label="Permalink to &quot;DataUpload&quot;">​</a></h3><p>用于进行结构数据上链保存的操作对象。</p><h4 id="构造函数-12" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-12" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="dataupload-frontend-string" tabindex="-1">DataUpload (Frontend, String) <a class="header-anchor" href="#dataupload-frontend-string" aria-label="Permalink to &quot;DataUpload (Frontend, String)&quot;">​</a></h5><pre><code>public DataUpload (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

DataUpload oDataUpload = new DataUpload (oFrontend, businessDomainID);
</code></pre><h5 id="dataupload-1" tabindex="-1">DataUpload () <a class="header-anchor" href="#dataupload-1" aria-label="Permalink to &quot;DataUpload ()&quot;">​</a></h5><p>构造一个DataUpload对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public DataUpload ();
</code></pre><h4 id="属性-12" tabindex="-1">属性 <a class="header-anchor" href="#属性-12" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-12" tabindex="-1">frontend <a class="header-anchor" href="#frontend-12" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-12" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-12" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要上链保存的数据所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="datacontent" tabindex="-1">dataContent <a class="header-anchor" href="#datacontent" aria-label="Permalink to &quot;dataContent&quot;">​</a></h5><p>设置要上链保存的数据体。建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。dataContent的信息将被区块链加密保存。</p><pre><code>public String dataContent { set; get; }
</code></pre><h5 id="dataproperty" tabindex="-1">dataProperty <a class="header-anchor" href="#dataproperty" aria-label="Permalink to &quot;dataProperty&quot;">​</a></h5><p>设置要上链保存的数据附属属性信息。附属属性建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。DdataProperty的信息将被区块链加密保存。</p><p>如果想要对链上已保存的dataProperty进行清空处理，则此属性需设置NULL。</p><pre><code>public String dataProperty { set; get; }
</code></pre><h5 id="encname" tabindex="-1">encName <a class="header-anchor" href="#encname" aria-label="Permalink to &quot;encName&quot;">​</a></h5><p>设置敏感数据的链上加密方式得名称。</p><pre><code>public String encName{ set; get; }
</code></pre><h5 id="owner" tabindex="-1">owner <a class="header-anchor" href="#owner" aria-label="Permalink to &quot;owner&quot;">​</a></h5><p>设置提交上链交易的数据所有者数字身份标识，必须是owners中的一个数字身份标识。</p><pre><code>public RoleItem owner { set; get; }
</code></pre><ul><li>RoleItem</li></ul><p>数字身份标识对象信息。</p><ul><li><p>属性</p><ul><li>addr</li></ul></li></ul><p>数字身份标识。</p><pre><code>* encKey
</code></pre><p>对称加密的秘钥。</p><h5 id="owners-1" tabindex="-1">owners <a class="header-anchor" href="#owners-1" aria-label="Permalink to &quot;owners&quot;">​</a></h5><p>设置链上数据的所有者数字身份标识列表。</p><pre><code>public RoleItem[] owners { set; get; }
</code></pre><p>示例：</p><pre><code>RoleItem[] ownerIDs =
{ new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
}
oDataUpload.owners = ownerIDs;
</code></pre><h5 id="sharers-1" tabindex="-1">sharers <a class="header-anchor" href="#sharers-1" aria-label="Permalink to &quot;sharers&quot;">​</a></h5><p>设置要授予结构数据分享权限的数字身份标识列表。结构数据分享者有权添加数据读取者和删除自己添加的读取者数字身份标识。可以后续通过&quot;数据授权&quot;链上操作进行授权（DataAuthorise）。</p><p>如果dataID属性设置了已保存于链上的结构数据链上ID，此属性区块链做无效处理。即结构数据更新时，不会进行结构数据分享权限更新处理。</p><pre><code>public RoleItem[] sharers { set; get; }
</code></pre><p><strong>示例：</strong></p><pre><code>//设置要授予结构数据分享权限的数字身份标识列表
String[] sharerIDs = 
{ new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
}
oDataUpload.sharers = sahrerIDs;
</code></pre><h5 id="readers-1" tabindex="-1">readers <a class="header-anchor" href="#readers-1" aria-label="Permalink to &quot;readers&quot;">​</a></h5><p>设置要授予数据读取权限的数字身份标识列表。可以后续通过&quot;数据授权&quot;链上操作进行授权（DataAuthorise）。</p><p>如果dataID属性设置了已保存于链上的数据链上ID，此属性区块链做无效处理。即数据更新时，不会进行数据读取权限更新处理。</p><pre><code>public RoleItem[] readers { set; get; }
</code></pre><p><strong>示例：</strong></p><pre><code>//设置要授予数据读取权限的数字身份标识列表
String[] readers= 
{ new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
}
oDataUpload.sharers = readers;
</code></pre><h5 id="eventcontext-11" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-11" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//上链保存的数据在链外应用系统数据库中的唯一标识
String dataIDfromBizSystem = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oDataUpload.eventContext = dataIDfromBizSystem;
</code></pre><h4 id="方法-12" tabindex="-1">方法 <a class="header-anchor" href="#方法-12" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="submit-7" tabindex="-1">submit <a class="header-anchor" href="#submit-7" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;数据保存&quot;上链交易请求，开始进行数据保存链上操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit(String ownerPrivateKey);
</code></pre><p><strong>参数</strong></p><p>ownerPrivateKey String</p><p>设置要进行上链保存的数据所有者的数字身份私钥，ownerID对应的私钥。私钥用于对&quot;数据保存&quot;上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--链上数据所有者数字身份私钥
String ownerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行数据保存上链操作提交
oDataUpload.submit (ownerPrivateKey);
</code></pre><h5 id="createtxbody-7" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-7" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;数据保存&quot;链上操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;数据保存&quot;上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;数据保存&quot;上链交易体
String dataUploadTxBody= oDataUpload.createTxBody();
//用数据所有者数字身份对&quot;数据保存&quot;上链交易体进行签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
//--对&quot;数据保存&quot;上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(dataUploadTxBody, ownerPrivateKey);
</code></pre><h5 id="submittxbody-7" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-7" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用数据保存上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交&quot;数据保存&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submitTxBody(String dataUploadTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>dataUploadTxBody String</p><p>数据保存上链交易体原文</p><p>txSign String</p><p>数据保存上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备数据保存上链交易体
DataUpload oPrepareDataUploadTxBody = new DataUpload();
oPrepareDataUploadTxBody.dataID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareDataUploadTxBody.ownerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String[] ownersList = {&quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;};
oPrepareDataUploadTxBody.owners = ownersList;
oPrepareDataUploadTxBody.dataContent = &quot;{&#39;姓名&#39;: &#39;张三&#39;,&#39;性别&#39;: &#39;男&#39;}&quot;;
oPrepareDataUploadTxBody.dataProperty = &quot;人员基本信息描述&quot;;

String dataUploadTxBody = oPrepareDataUploadTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行dataUploadTxBody签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
String txSign = CryptoUtil.crypto.signature(dataUploadTxBody, ownerPrivateKey);

//【程序A】提交数据保存上链交易，并跟踪链上处理状态
DataUpload oDataUpload = new DataUpload (frontendServer, businessDomainID);
oDataUpload.eventContext =dataIDfromBizSystem;
oDataUpload.submitTxBody (dataUploadTxBody, txSign);
</code></pre><h4 id="事件-11" tabindex="-1">事件 <a class="header-anchor" href="#事件-11" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-7" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-7" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在结构数据上链保存成功，并获得落块确认时发生。</p><pre><code>public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context);
</code></pre><p>参数</p><p>dUploadStatus DataUploadStatus</p><p>包含&quot;数据保存&quot;链上操作的当前处理状态信息的对象。</p><p>dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：</p><p>| status，errorCode，message，dataID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataUpload oDataUpload = new DataUpload() {
    @Override
    public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
       //事件触发条件：结构数据上链保存成功，并获得落块确认。
       DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
       System.out.println(&quot;数据链上ID =&quot; + oDataTxBlockInfo.dataID);
       System.out.println(&quot;数据当前版本ID =&quot; + oDataTxBlockInfo.versionID);
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-7" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-7" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在结构数据保存上链交易落块确认失败，上链保存的结构数据被链回滚时发生。事件触发后，会返回错误信息。结构数据保存上链交易请求需重新提交。</p><pre><code>public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context);
</code></pre><p>参数</p><p>dUploadStatus DataUploadStatus</p><p>包含&quot;数据保存&quot;链上操作的当前处理状态信息的对象。</p><p>dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataUpload oDataUpload = new DataUpload() {
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
}
</code></pre><h5 id="ontxsendsuccess-7" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-7" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在结构数据保存上链交易发送成功，等待区块链执行处理时发生。</p><pre><code>public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context);
</code></pre><p>参数</p><p>dUploadStatus DataUploadStatus</p><p>包含&quot;数据保存&quot;链上操作的当前处理状态信息的对象。</p><p>dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataUpload oDataUpload = new DataUpload(){
    @Override
    public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
       //事件触发条件：结构数据保存上链交易发送成功，等待区块链执行处理。 
       DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
       System.out.println(&quot;结构数据保存上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-7" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-7" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在结构数据保存上链交易发送失败时发生。数据保存上链交易请求需重新提交。</p><pre><code>public void onTxSendFailure(DataTxStatus dUploadStatus, Object context);
</code></pre><p>参数</p><p>dUploadStatus DataUploadStatus</p><p>包含&quot;数据保存&quot;链上操作的当前处理状态信息的对象。</p><p>dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataUpload oDataUpload = new DataUpload() {
    @Override
    public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
       //事件触发条件：结构数据保存上链交易发送失败。
       System.out.println(&quot;结构数据保存上链交易发送失败的返回结果=&quot; + dUploadStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-7" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-7" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在结构数据保存上链交易执行成功，结构数据上链保存成功，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context);
</code></pre><p>参数</p><p>dUploadStatus DataUploadStatus</p><p>包含&quot;数据保存&quot;链上操作的当前处理状态信息的对象。</p><p>dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：</p><p>| status，errorCode，message，dataID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataUpload oDataUpload = new DataUpload(){
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
}
</code></pre><h5 id="ontxexecfailure-7" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-7" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在结构数据保存上链交易执行失败，结构数据未上链保存时发生。事件触发后会返回错误信息。数据保存上链交易请求需重新提交。</p><pre><code>public void onTxExecFailure(DataTxStatus dUploadStatus, Object context);
</code></pre><p>参数</p><p>dUploadStatus DataUploadStatus</p><p>包含&quot;数据保存&quot;链上操作的当前处理状态信息的对象。</p><p>dUploadStatus中将包含如下返回信息，详细解释请参看DataUploadStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataUpload oDataUpload = new DataUpload(){
    @Override
    public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
       //事件触发条件：结构数据保存上链交易执行失败，结构数据未上链保存。
       DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
       String DataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + DataIDFromCaller);
       System.out.println(&quot;结构数据保存上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + dUploadStatus.message);
    }
}
</code></pre><h5 id="onerror-11" tabindex="-1">onError <a class="header-anchor" href="#onerror-11" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在DataUpload调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>DataUpload oDataUpload = new DataUpload() {
    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：DataUpload调用出现异常。并返回异常信息。
       String DataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + DataIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="datatxstatus-status状态编码" tabindex="-1">DataTxStatus.status状态编码 <a class="header-anchor" href="#datatxstatus-status状态编码" aria-label="Permalink to &quot;DataTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收数据保存上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收数据保存上链交易请求失败，数据保存上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>数据保存上链交易执行成功，数据上链保存成功，等待落块确认。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td>数据保存上链交易执行失败，数据未上链保存。数据保存上链交易请求需重新提交。</td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>数据上链保存成功，并获得落块确认。</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td>因落块确认失败，上链保存的数据被链回滚。数据保存上链交易请求需重新提交。</td></tr></tbody></table><h3 id="datamodify" tabindex="-1">DataModify <a class="header-anchor" href="#datamodify" aria-label="Permalink to &quot;DataModify&quot;">​</a></h3><p>用于进行结构数据更新操作对象。</p><h4 id="构造函数-13" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-13" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="datamodify-frontend-string" tabindex="-1">DataModify (Frontend, String) <a class="header-anchor" href="#datamodify-frontend-string" aria-label="Permalink to &quot;DataModify (Frontend, String)&quot;">​</a></h5><pre><code>public DataModify (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

DataModify oDataModify = new DataModify (oFrontend, businessDomainID);
</code></pre><h5 id="datamodify-1" tabindex="-1">DataModify () <a class="header-anchor" href="#datamodify-1" aria-label="Permalink to &quot;DataModify ()&quot;">​</a></h5><p>构造一个DataModify对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public DataModify ();
</code></pre><h4 id="属性-13" tabindex="-1">属性 <a class="header-anchor" href="#属性-13" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-13" tabindex="-1">frontend <a class="header-anchor" href="#frontend-13" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-13" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-13" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要进行更新的数据所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="dataid" tabindex="-1">dataID <a class="header-anchor" href="#dataid" aria-label="Permalink to &quot;dataID&quot;">​</a></h5><p>设置要进行更新的链上数据的数据链上ID。</p><pre><code>public String dataID { set; get; }
</code></pre><h5 id="datacontent-1" tabindex="-1">dataContent <a class="header-anchor" href="#datacontent-1" aria-label="Permalink to &quot;dataContent&quot;">​</a></h5><p>设置要进行更新的数据体。建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。dataContent的信息将被区块链加密保存。</p><pre><code>public String dataContent { set; get; }
</code></pre><h5 id="dataproperty-1" tabindex="-1">dataProperty <a class="header-anchor" href="#dataproperty-1" aria-label="Permalink to &quot;dataProperty&quot;">​</a></h5><p>设置要进行更新的数据附属属性信息。附属属性建议使用JSON或XML等格式构建，然后序列化成String的类型进行存储。dataProperty的信息将被区块链加密保存。</p><p>如果想要对链上已保存的dataProperty进行清空处理，则此属性需设置NULL。</p><pre><code>public String dataProperty { set; get; }
</code></pre><h5 id="ownerid-5" tabindex="-1">ownerID <a class="header-anchor" href="#ownerid-5" aria-label="Permalink to &quot;ownerID&quot;">​</a></h5><p>设置提交上链交易的数据所有者数字身份标识，必须是owners中的一个数字身份标识。</p><pre><code>public String ownerID { set; get; }
</code></pre><h5 id="eventcontext-12" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-12" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//上链更新数据在链外应用系统数据库中的唯一标识
String dataIDfromBizSystem = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oDataModify.eventContext = dataIDfromBizSystem;
</code></pre><h4 id="方法-13" tabindex="-1">方法 <a class="header-anchor" href="#方法-13" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="submit-8" tabindex="-1">submit <a class="header-anchor" href="#submit-8" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交数据更新上链交易请求，开始进行数据更新上链操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit(String ownerPrivateKey);
</code></pre><p><strong>参数</strong></p><p>ownerPrivateKey String</p><p>设置进行数据更新的所有者的数字身份私钥，ownerID对应的私钥。私钥用于对数据更新上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--链上数据所有者数字身份私钥
String ownerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行数据更新上链操作提交
oDataModify.submit (ownerPrivateKey);
</code></pre><h5 id="createtxbody-8" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-8" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成数据更新链上操作对应的上链交易体，以便使用ownerID对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的数据更新上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成数据更新上链交易体
String dataModifyTxBody = oDataModify.createTxBody();
//用数据所有者数字身份对数据更新上链交易体进行签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
//--对数据更新上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(dataModifyTxBody, ownerPrivateKey);
</code></pre><h5 id="submittxbody-8" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-8" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用数据更新上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交数据更新上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submitTxBody(String dataModifyTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>dataModifyTxBody String</p><p>数据更新上链交易体原文</p><p>txSign String</p><p>数据更新上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备数据更新上链交易体
DataModify oPrepareDataModifyTxBody = new DataModify();
oPrepareDataModifyTxBody.dataID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareDataModifyTxBody.ownerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
oPrepareDataModifyTxBody.dataContent = &quot;{&#39;姓名&#39;: &#39;张三&#39;,&#39;性别&#39;: &#39;男&#39;}&quot;;
oPrepareDataModifyTxBody.dataProperty = &quot;人员基本信息描述&quot;;

String dataModifyTxBody = oPrepareDataModifyTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行dataModifyTxBody签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
String txSign = CryptoUtil.crypto.signature(dataModifyTxBody, ownerPrivateKey);

//【程序A】提交数据更新上链交易，并跟踪链上处理状态
DataModify oDataModify = new DataModify (frontendServer, businessDomainID);
oDataModify.eventContext =dataIDfromBizSystem;
oDataModify.submitTxBody (dataModifyTxBody, txSign);
</code></pre><h4 id="事件-12" tabindex="-1">事件 <a class="header-anchor" href="#事件-12" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-8" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-8" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在结构数据上链保存成功，并获得落块确认时发生。</p><pre><code>public void onTxBlockConfirm(DataTxStatus dModifyStatus, Object context);
</code></pre><p>参数</p><p>dModifyStatus DataModifyStatus</p><p>包含数据更新操作的当前处理状态信息的对象。</p><p>dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：</p><p>| status，errorCode，message，dataID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataModify oDataModify = new DataModify() {
    @Override
    public void onTxBlockConfirm(DataTxStatus dModifyStatus, Object context) {
       //事件触发条件：结构数据上链保存成功，并获得落块确认。
       DataTxBlockInfo oDataTxBlockInfo = dModifyStatus.txBlockData;
       System.out.println(&quot;数据链上ID =&quot; + oDataTxBlockInfo.dataID);
       System.out.println(&quot;数据当前版本ID =&quot; + oDataTxBlockInfo.versionID);
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-8" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-8" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在结构数据更新上链交易落块确认失败，上链保存的结构数据被链回滚时发生。事件触发后，会返回错误信息。结构数据更新上链交易请求需重新提交。</p><pre><code>public void onTxBlockCfmFailure(DataTxStatus dModifyStatus, Object context);
</code></pre><p>参数</p><p>dModifyStatus DataModifyStatus</p><p>包含数据更新操作的当前处理状态信息的对象。</p><p>dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataModify oDataModify = new DataModify() {
    @Override
    public void onTxBlockCfmFailure(DataTxStatus dModifyStatus, Object context) {
       //事件触发条件：结构数据更新上链交易落块确认失败，上链保存的结构数据被链回滚。
       //事件触发后，会返回错误信息。结构数据更新上链交易请求需重新提交。
       DataTxBlockInfo oDataTxBlockInfo = dModifyStatus.txBlockData;
       System.out.println(&quot;结构数据更新上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;结构数据更新上链交易落块确认失败的返回结果=&quot; + dModifyStatus.message);
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
    }
}
</code></pre><h5 id="ontxsendsuccess-8" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-8" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在结构数据更新上链交易发送成功，等待区块链执行处理时发生。</p><pre><code>public void onTxSendSuccess(DataTxStatus dModifyStatus, Object context);
</code></pre><p>参数</p><p>dModifyStatus DataModifyStatus</p><p>包含数据更新操作的当前处理状态信息的对象。</p><p>dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataModify oDataModify = new DataModify(){
    @Override
    public void onTxSendSuccess(DataTxStatus dModifyStatus, Object context) {
       //事件触发条件：结构数据更新上链交易发送成功，等待区块链执行处理。 
       DataTxBlockInfo oDataTxBlockInfo = dModifyStatus.txBlockData;
       System.out.println(&quot;结构数据更新上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-8" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-8" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在结构数据更新上链交易发送失败时发生。数据更新上链交易请求需重新提交。</p><pre><code>public void onTxSendFailure(DataTxStatus dModifyStatus, Object context);
</code></pre><p>参数</p><p>dModifyStatus DataModifyStatus</p><p>包含数据更新操作的当前处理状态信息的对象。</p><p>dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataModify oDataModify = new DataModify() {
    @Override
    public void onTxSendFailure(DataTxStatus dModifyStatus, Object context) {
       //事件触发条件：结构数据更新上链交易发送失败。
       System.out.println(&quot;结构数据更新上链交易发送失败的返回结果=&quot; + dModifyStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-8" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-8" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在结构数据更新上链交易执行成功，结构数据上链保存成功，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(DataTxStatus dModifyStatus, Object context);
</code></pre><p>参数</p><p>dModifyStatus DataModifyStatus</p><p>包含数据更新操作的当前处理状态信息的对象。</p><p>dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：</p><p>| status，errorCode，message，dataID，versionID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataModify oDataModify = new DataModify(){
    @Override
    public void onTxExecSuccess(DataTxStatus dModifyStatus, Object context) {
       //事件触发条件：结构数据更新上链交易执行成功，结构数据上链保存成功，等待落块确认。
       DataTxBlockInfo oDataTxBlockInfo = dModifyStatus.txBlockData;
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       System.out.println(&quot;数据链上ID =&quot; + oDataTxBlockInfo.dataID);
       System.out.println(&quot;数据当前版本ID=&quot; + oDataTxBlockInfo.versionID);
       System.out.println(&quot;结构数据更新上链交易Hash=&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oDataTxBlockInfo.txExecTimestamp.toString());
       System.out.println(&quot;交易所在区块hash=&quot; + oDataTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oDataTxBlockInfo.blockedTimestamp.toString());
       System.out.println(&quot;交易所在区块高度=&quot; + oDataTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure-8" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-8" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在结构数据更新上链交易执行失败，结构数据未上链保存时发生。事件触发后会返回错误信息。数据更新上链交易请求需重新提交。</p><pre><code>public void onTxExecFailure(DataTxStatus dModifyStatus, Object context);
</code></pre><p>参数</p><p>dModifyStatus DataModifyStatus</p><p>包含数据更新操作的当前处理状态信息的对象。</p><p>dModifyStatus中将包含如下返回信息，详细解释请参看DataModifyStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataModify oDataModify = new DataModify(){
    @Override
    public void onTxExecFailure(DataTxStatus dModifyStatus, Object context) {
       //事件触发条件：结构数据更新上链交易执行失败，结构数据未上链保存。
       DataTxBlockInfo oDataTxBlockInfo = dModifyStatus.txBlockData;
       String DataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + DataIDFromCaller);
       System.out.println(&quot;结构数据更新上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + dModifyStatus.message);
    }
}
</code></pre><h5 id="onerror-12" tabindex="-1">onError <a class="header-anchor" href="#onerror-12" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在DataModify调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>DataModify oDataModify = new DataModify() {
    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：DataModify调用出现异常。并返回异常信息。
       String DataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + DataIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="datatxstatus-status状态编码-1" tabindex="-1">DataTxStatus.status状态编码 <a class="header-anchor" href="#datatxstatus-status状态编码-1" aria-label="Permalink to &quot;DataTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收数据更新上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收数据更新上链交易请求失败，数据更新上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>数据更新上链交易执行成功，数据上链保存成功，等待落块确认。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td>数据更新上链交易执行失败，数据未上链保存。数据更新上链交易请求需重新提交。</td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>数据上链保存成功，并获得落块确认。</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td>因落块确认失败，上链保存的数据被链回滚。数据更新上链交易请求需重新提交。</td></tr></tbody></table><h3 id="dataauthorise" tabindex="-1">DataAuthorise <a class="header-anchor" href="#dataauthorise" aria-label="Permalink to &quot;DataAuthorise&quot;">​</a></h3><p>用于进行结构数据授权的操作对象。</p><h4 id="构造函数-14" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-14" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="dataauthorise-frontend-string" tabindex="-1">DataAuthorise (Frontend, String) <a class="header-anchor" href="#dataauthorise-frontend-string" aria-label="Permalink to &quot;DataAuthorise (Frontend, String)&quot;">​</a></h5><pre><code>public DataAuthorise (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

DataAuthorise oDataAuthorise = new DataAuthorise (oFrontend, businessDomainID);
</code></pre><h5 id="dataauthorise-1" tabindex="-1">DataAuthorise () <a class="header-anchor" href="#dataauthorise-1" aria-label="Permalink to &quot;DataAuthorise ()&quot;">​</a></h5><p>构造一个DataAuthorise对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public DataAuthorise ();
</code></pre><h4 id="属性-14" tabindex="-1">属性 <a class="header-anchor" href="#属性-14" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-14" tabindex="-1">frontend <a class="header-anchor" href="#frontend-14" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-14" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-14" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要进行数据授权的数据所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="dataid-1" tabindex="-1">dataID <a class="header-anchor" href="#dataid-1" aria-label="Permalink to &quot;dataID&quot;">​</a></h5><p>设置要进行数据授权的链上数据的数据链上ID。</p><pre><code>public String dataID { set; get; }
</code></pre><h5 id="grantorid-1" tabindex="-1">grantorID <a class="header-anchor" href="#grantorid-1" aria-label="Permalink to &quot;grantorID&quot;">​</a></h5><p>设置提交上链交易的授权者数字身份标识，必须是owners或sharers中的一个数字身份标识。</p>`,1343),p=e("ul",{"set;":"","get;":""},[e("li",null,[e("p",null,"数据所有者可以授权分享者列表和读取者列表。")]),e("li",null,[e("p",null,"数据分享者可以授权读取者列表。"),e("p",null,"public String grantorID")])],-1),d=t(`<h5 id="eventcontext-13" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-13" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要授予数据授权的数据在链外应用系统数据库中的唯一标识
String dataIDfromBizSystem = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oDataAuthorise.eventContext =dataIDfromBizSystem;
</code></pre><h4 id="方法-14" tabindex="-1">方法 <a class="header-anchor" href="#方法-14" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="addreaders-1" tabindex="-1">addReaders <a class="header-anchor" href="#addreaders-1" aria-label="Permalink to &quot;addReaders&quot;">​</a></h5><p>设置要授予数据读取权限的数字身份标识列表。</p><pre><code>public void addReaders ( RoleItem [] readers );
</code></pre><p><strong>参数</strong></p><p>readers RoleItem []</p><p>要授予数据读取权限的数字身份标识。</p><p><strong>示例：</strong></p><pre><code>//设置要授予数据读取权限的数字身份标识列表
String[] readerIDs =
{ new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
}
oDataAuthorise.addReaders(readerIDs);
</code></pre><h5 id="addsharers-1" tabindex="-1">addSharers <a class="header-anchor" href="#addsharers-1" aria-label="Permalink to &quot;addSharers&quot;">​</a></h5><p>设置要授予数据分享权限的数字身份标识列表。</p><pre><code>public void addSharers ( RoleItem [] Sharers );
</code></pre><p><strong>参数</strong></p><p>Sharers RoleItem []</p><p>要授予数据分享权限的数字身份标识。</p><p><strong>示例：</strong></p><pre><code>//设置要授予数据分享权限的数字身份标识列表
String[] sharerIDs =
{ new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
}
oDataAuthorise.addSharers (sharerIDs);
</code></pre><h5 id="addowners-1" tabindex="-1">addOwners <a class="header-anchor" href="#addowners-1" aria-label="Permalink to &quot;addOwners&quot;">​</a></h5><p>设置要授予数据所有者权限的数字身份标识列表。</p><pre><code>public void addOwners (RoleItem [] Owners);
</code></pre><p><strong>参数</strong></p><p>Owners RoleItem []</p><p>要授予数据所有者权限的数字身份标识。</p><p><strong>示例：</strong></p><pre><code>//设置要授予数据所有者权限的数字身份标识列表
String[] ownerIDs =
 { new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
}
oDataAuthorise.addOwners(ownerIDs);
</code></pre><h5 id="removereaders-1" tabindex="-1">removeReaders <a class="header-anchor" href="#removereaders-1" aria-label="Permalink to &quot;removeReaders&quot;">​</a></h5><p>设置要删除数据读取权限的数字身份标识列表。</p><pre><code>public void removeReaders (RoleItem [] Readers);
</code></pre><p><strong>示例：</strong></p><pre><code>//设置要删除数据读取权限的数字身份标识列表
String[] readerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oDataAuthorise.removeReaders(readerIDs);
</code></pre><h5 id="removesharers-1" tabindex="-1">removeSharers <a class="header-anchor" href="#removesharers-1" aria-label="Permalink to &quot;removeSharers&quot;">​</a></h5><p>设置要删除数据分享权限的数字身份标识列表。</p><pre><code>public void removeSharers { String[] Sharers };
</code></pre><p><strong>示例：</strong></p><pre><code>//设置要删除数据分享权限的数字身份标识列表
String[] sharerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oDataAuthorise.removeSharers(sharerIDs);
</code></pre><h5 id="removeowners-1" tabindex="-1">removeOwners <a class="header-anchor" href="#removeowners-1" aria-label="Permalink to &quot;removeOwners&quot;">​</a></h5><p>设置要删除数据所有者权限的数字身份标识列表。</p><pre><code>public void removeOwners (String[] Owners);
</code></pre><p><strong>示例：</strong></p><pre><code>//设置要删除数据所有者的数字身份标识列表
String[] ownerIDs = {&quot;e51eb48b57bee72896288021bcfc78c0bac87374&quot;,
&quot;8962857bee7b48b28021b7374cfc78c0bac8e51e&quot;,
&quot;374cfc78c0ba57bee78b2896288021b7c8 e51eb4&quot;
};
oDataAuthorise.removeOwners(ownerIDs);
</code></pre><h5 id="submit-9" tabindex="-1">submit <a class="header-anchor" href="#submit-9" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;数据授权&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit (String senderPrivateKey);
</code></pre><p><strong>参数</strong></p><p>grantorPrivateKey String</p><p>提交上链交易的授权者数字身份私钥，grantorID对应的私钥。私钥用于对&quot;数据授权&quot;上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--提交上链交易的授权者数字身份私钥（即Owners或Sharers中的一个数字身份标识）
String grantorPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行数据授权上链操作提交
oDataAuthorise.submit (grantorPrivateKey);
</code></pre><h5 id="createtxbody-9" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-9" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;数据授权&quot;链上操作对应的上链交易体，以便使用grantorID对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;数据授权&quot;上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;数据授权&quot;上链交易体
String dataAuthoriseTxBody= oDataAuthorise.createTxBody();
//使用提交上链交易的授权者数字身份对&quot;数据授权&quot;上链交易体进行签名
String grantorPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
//--对&quot;数据授权&quot;上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(dataAuthoriseTxBody, grantorPrivateKey);
</code></pre><h5 id="submittxbody-9" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-9" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用数据授权上链交易体原文和grantorID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交&quot;数据授权&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submitTxBody(String dataAuthoriseTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>dataAuthoriseTxBody String</p><p>数据授权上链交易体原文</p><p>txSign String</p><p>数据授权上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备数据授权上链交易体
DataAuthorise oPrepareDataAuthTxBody = new DataAuthorise();
oPrepareDataAuthTxBody.dataID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareDataAuthTxBody.grantorID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String[] readerIDs =  {
 new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6),
new RoleItem
(e51eb48b57bee72896288021bcfc78c0bac87374,6ca423b9ab5eaab00a882a807652ab6)
}
oPrepareDataAuthTxBody.addReaders = readerIDs;

String dataAuthoriseTxBody = oPrepareDataAuthTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行dataAuthoriseTxBody签名
String grantorPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
String txSign = CryptoUtil.crypto.signature(dataAuthoriseTxBody, grantorPrivateKey);

//【程序A】提交数据授权上链交易，并跟踪链上处理状态
DataAuthorise oDataAuthorise = new DataAuthorise (frontendServer, businessDomainID);
oDataAuthorise.eventContext =dataIDfromBizSystem;
oDataAuthorise.submitTxBody (dataAuthoriseTxBody, txSign);
</code></pre><h4 id="事件-13" tabindex="-1">事件 <a class="header-anchor" href="#事件-13" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-9" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-9" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在数据授权上链交易执行成功，并获得落块确认时发生。</p><pre><code>public void onTxBlockConfirm(DataTxStatus dAuthStatus, Object context);
</code></pre><p>参数</p><p>dAuthStatus DataAuthoriseStatus</p><p>包含&quot;数据授权&quot;链上操作的当前处理状态信息的对象。</p><p>dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：</p><p>| status，errorCode，message，dataID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataAuthorise oDataAuthorise = new DataAuthorise() {
    @Override
    public void onTxBlockConfirm(DataTxStatus dAuthStatus, Object context) {
       //事件触发条件：数据授权上链交易执行成功，并获得落块确认。
       DataTxBlockInfo oDataTxBlockInfo = dAuthStatus.txBlockData;
       System.out.println(&quot;数据链上ID =&quot; + oDataTxBlockInfo.dataID);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-9" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-9" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在数据授权上链交易执行失败，上链保存的数据授权被链回滚。事件触发后，会返回错误信息。数据授权上链交易请求需重新提交。</p><pre><code>public void onTxBlockCfmFailure(DataTxStatus dAuthStatus, Object context);
</code></pre><p>参数</p><p>dAuthStatus DataAuthoriseStatus</p><p>包含&quot;数据授权&quot;链上操作的当前处理状态信息的对象。</p><p>dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataAuthorise oDataAuthorise = new DataAuthorise() {
    @Override
    public void onTxBlockCfmFailure(DataTxStatus dAuthStatus, Object context) {
       //事件触发条件：数据授权上链交易执行失败，上链保存的数据授权被链回滚。
       //事件触发后，会返回错误信息。数据授权上链交易请求需重新提交。
       DataTxBlockInfo oDataTxBlockInfo = dAuthStatus.txBlockData;
       System.out.println(&quot;数据授权上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;数据授权上链交易执行失败的返回结果=&quot; + dAuthStatus.message);
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
    }
}
</code></pre><h5 id="ontxsendsuccess-9" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-9" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在数据授权上链交易发送成功，等待区块链执行处理时发生。</p><pre><code>public void onTxSendSuccess(DataTxStatus dAuthStatus, Object context);
</code></pre><p>参数</p><p>dAuthStatus DataAuthoriseStatus</p><p>包含&quot;数据授权&quot;链上操作的当前处理状态信息的对象。</p><p>dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataAuthorise oDataAuthorise = new DataAuthorise() {
    @Override
    public void onTxSendSuccess(DataTxStatus dAuthStatus, Object context) {
       //事件触发条件：数据授权上链交易发送成功，等待区块链执行处理。 
       DataTxBlockInfo oDataTxBlockInfo = dAuthStatus.txBlockData;
       System.out.println(&quot;数据授权上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-9" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-9" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在数据授权上链交易发送失败时发生。数据授权上链交易请求需重新提交。</p><pre><code>public void onTxSendFailure(DataTxStatus dAuthStatus, Object context);
</code></pre><p>参数</p><p>dAuthStatus DataAuthoriseStatus</p><p>包含&quot;数据授权&quot;链上操作的当前处理状态信息的对象。</p><p>dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataAuthorise oDataAuthorise = new DataAuthorise() {
    @Override
    public void onTxSendFailure (DataTxStatus dAuthStatus, Object context) {
       //事件触发条件：数据授权上链交易发送失败。
       //事件触发后，会返回错误信息。
       System.out.println(&quot;数据授权上链交易发送失败的返回结果=&quot; + dAuthStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-9" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-9" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在数据授权上链交易执行成功，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(DataTxStatus dAuthStatus, Object context);
</code></pre><p>参数</p><p>dAuthStatus DataAuthoriseStatus</p><p>包含&quot;数据授权&quot;链上操作的当前处理状态信息的对象。</p><p>dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：</p><p>| status，errorCode，message，dataID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataAuthorise oDataAuthorise = new DataAuthorise() {
    @Override
    public void onTxExecSuccess (DataTxStatus dAuthStatus, Object context) {
       //事件触发条件：数据授权上链交易执行成功，等待落块确认。
       DataTxBlockInfo oDataTxBlockInfo = dAuthStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;数据链上ID =&quot; + oDataTxBlockInfo.dataID);
       System.out.println(&quot;数据授权上链交易Hash=&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oDataTxBlockInfo.txExecTimestamp.toString());
       System.out.println(&quot;交易所在区块hash=&quot; + oDataTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oDataTxBlockInfo.blockedTimestamp.toString());
       System.out.println(&quot;交易所在区块高度=&quot; + oDataTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure-9" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-9" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在数据授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效时发生。事件触发后会返回错误信息。数据授权上链交易请求需重新提交。</p><pre><code>public void onTxExecFailure(DataTxStatus dAuthStatus, Object context);
</code></pre><p>参数</p><p>dAuthStatus DataAuthoriseStatus</p><p>包含&quot;数据授权&quot;链上操作的当前处理状态信息的对象。</p><p>dAuthStatus中将包含如下返回信息，详细解释请参看DataAuthoriseStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataAuthorise oDataAuthorise = new DataAuthorise() {
    @Override
    public void onTxExecFailure (DataTxStatus dAuthStatus, Object context) {
       //事件触发条件：数据授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效。 
       //事件触发后，会返回错误信息。数据授权上链交易请求需重新提交。
       DataTxBlockInfo oDataTxBlockInfo = dAuthStatus.txBlockData;
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;数据授权上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + dAuthStatus.message);
    }
}
</code></pre><h5 id="onerror-13" tabindex="-1">onError <a class="header-anchor" href="#onerror-13" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在DataAuthorise调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>DataAuthorise oDataAuthorise = new DataAuthorise() {
    @Override
    public void onError (TxException e, Object context) {
       //事件触发条件：DataAuthorise调用出现异常。并返回异常信息。
       String fileIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + fileIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="datatxstatus-status状态编码-2" tabindex="-1">DataTxStatus.status状态编码 <a class="header-anchor" href="#datatxstatus-status状态编码-2" aria-label="Permalink to &quot;DataTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收数据授权上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收数据授权上链交易请求失败，数据授权上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>数据授权上链交易执行成功，数据读取/所有者权限的数字身份标识列表上链更新成功，等待落块确认。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td></td></tr><tr><td>数据授权上链交易执行失败，数据读取/所有者权限的数字身份标识列表未上链更新。数据授权上链交易请求需重新提交。</td><td></td><td></td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>数据授权上链更新成功，并获得落块确认。</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td></td></tr><tr><td>因落块确认失败，上链更新的数据读取/所有者权限的数字身份标识列表被链回滚。数据授权上链交易请求需重新提交。</td><td></td><td></td></tr></tbody></table><h3 id="datafetch" tabindex="-1">DataFetch <a class="header-anchor" href="#datafetch" aria-label="Permalink to &quot;DataFetch&quot;">​</a></h3><p>用于进行链上结构数据获取的操作对象。</p><h4 id="构造函数-15" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-15" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="datafetch-frontend-string" tabindex="-1">DataFetch (Frontend, String) <a class="header-anchor" href="#datafetch-frontend-string" aria-label="Permalink to &quot;DataFetch (Frontend, String)&quot;">​</a></h5><pre><code>public DataFetch (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上获取请求前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

DataFetch oDataFetch = new DataFetch(oFrontend, businessDomainID);
</code></pre><h5 id="datafetch-1" tabindex="-1">DataFetch () <a class="header-anchor" href="#datafetch-1" aria-label="Permalink to &quot;DataFetch ()&quot;">​</a></h5><p>构造一个DataFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public DataFetch ();
</code></pre><h4 id="属性-15" tabindex="-1">属性 <a class="header-anchor" href="#属性-15" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-15" tabindex="-1">frontend <a class="header-anchor" href="#frontend-15" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-15" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-15" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要进行数据获取的数据所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="dataid-2" tabindex="-1">dataID <a class="header-anchor" href="#dataid-2" aria-label="Permalink to &quot;dataID&quot;">​</a></h5><p>设置要进行数据获取的链上数据的数据链上ID。</p><pre><code>public String dataID { set; get; }
</code></pre><h5 id="versionid-3" tabindex="-1">versionID <a class="header-anchor" href="#versionid-3" aria-label="Permalink to &quot;versionID&quot;">​</a></h5><p>设置要获取的链上数据指定版本的数据的数据版本ID。如果此属性不赋值，则默认返回最新版本（即当前版本）的数据信息。</p><pre><code>public String versionID { set; get; }
</code></pre><h5 id="fetcherid-4" tabindex="-1">fetcherID <a class="header-anchor" href="#fetcherid-4" aria-label="Permalink to &quot;fetcherID&quot;">​</a></h5><p>设置要进行数据获取的获取者数字身份标识。数据获取者必须拥有数据读取权限，owners、sharers、readers中的一个数字身份标识。</p><pre><code>public String fetcherID { set; get; }
</code></pre><h5 id="eventcontext-14" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-14" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要获取的链上数据在链外应用系统数据库中的唯一标识
String dataIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oDataFetch.eventContext =dataIDFromCaller;
</code></pre><h4 id="方法-15" tabindex="-1">方法 <a class="header-anchor" href="#方法-15" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="query-5" tabindex="-1">query <a class="header-anchor" href="#query-5" aria-label="Permalink to &quot;query&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;数据获取&quot;链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void query(String fetcherPrivateKey);
</code></pre><p><strong>参数</strong></p><p>fetcherPrivateKey String</p><p>设置要进行数据获取的获取者数字身份私钥，fetcherID对应私钥。私钥用于对&quot;数据获取&quot;链上获取请求进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--获取者数字身份私钥
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
DataFetch oDataFetch = new DataFetch() {
    @Override
    public void onSuccess(DataFetchStatus dFetchStatus, Object context) {
      //事件触发条件：仅在采用异步查询方法时才会被触发
    }
};

//进行&quot;数据获取&quot;链上操作提交
oDataFetch.query (fetcherPrivateKey);
</code></pre><h5 id="createrqbody-4" tabindex="-1">createRqBody <a class="header-anchor" href="#createrqbody-4" aria-label="Permalink to &quot;createRqBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;数据获取&quot;链上操作对应的链上获取请求体，以便使用fetcherID对应的私钥对链上获取请求体进行确权签名。</p><pre><code>public String createRqBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;数据获取&quot;链上获取请求体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;数据获取&quot;链上获取请求体
String dFetchRqBody= oDataFetch.createRqBody();
//用获取者数字身份对&quot;数据获取&quot;链上获取请求体进行签名
String fetcherPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
//--对&quot;数据获取&quot;链上获取请求体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(dFetchRqBody, fetcherPrivateKey);
</code></pre><h5 id="queryrqbody-4" tabindex="-1">queryRqBody <a class="header-anchor" href="#queryrqbody-4" aria-label="Permalink to &quot;queryRqBody&quot;">​</a></h5><p>使用数据获取链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交&quot;数据获取&quot;链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void queryRqBody (String dFetchRqBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>dFetchRqBody String</p><p>数据获取链上获取请求体原文</p><p>txSign String</p><p>数据获取链上获取请求体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备&quot;数据获取&quot;链上获取请求体
DataFetch oPrepareDFetchRqBody = new DataFetch();
oPrepareDFetchRqBody.dataID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareDFetchRqBody.fetcherID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String dFetchRqBody = oPrepareDFetchRqBody.createRqBody ();

//【程序B】在外部使用数字身份签名应用进行dFetchRqBody签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(dFetchRqBody, fetcherPrivateKey);

//【程序A】提交&quot;数据获取&quot;链上获取请求，并跟踪链上处理状态
DataFetch oDataFetch = new DataFetch(frontendServer, businessDomainID);
oDataFetch.eventContext =dataIDFromCaller;
oDataFetch.queryRqBody (dFetchRqBody, txSign);
</code></pre><h4 id="事件-14" tabindex="-1">事件 <a class="header-anchor" href="#事件-14" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="onsuccess-4" tabindex="-1">onSuccess <a class="header-anchor" href="#onsuccess-4" aria-label="Permalink to &quot;onSuccess&quot;">​</a></h5><p>此事件在&quot;数据获取&quot;链上操作处理彻底完成，数据已成功下载时发生。</p><pre><code>public void onSuccess (DataFetchStatus dFetchStatus, Object context);
</code></pre><p>参数</p><p>dFetchStatus DataFetchStatus</p><p>包含&quot;数据获取&quot;链上操作的当前处理状态信息的对象。</p><p>dFetchStatus中将包含如下返回信息，详细解释请参看DataFetchStatus对象相关描述：</p><p>| status，errorCode，message，data |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataFetch oDataFetch = new DataFetch() {
    @Override
    public void onSuccess (DataFetchStatus dFetchStatus, Object context) {
      //事件触发条件：在&quot;数据获取&quot;链上操作处理彻底完成，数据已成功下载。
      String dataIDFromCaller = context;
      System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
      StructData oStructData = dFetchStatus.data;
      System.out.println(&quot;数据链上ID =&quot; + oStructData.dataID);
      System.out.println(&quot;数据版本ID=&quot; + oStructData.versionID);
      System.out.println(&quot;数据体=&quot; + oStructData.dataContent);
      System.out.println(&quot;数据附属属性=&quot; + oStructData.dataProperty); 
    }
}
</code></pre><h5 id="onfailure-4" tabindex="-1">onFailure <a class="header-anchor" href="#onfailure-4" aria-label="Permalink to &quot;onFailure&quot;">​</a></h5><p>此事件在&quot;数据获取&quot;链上操作处理失败，数据未被下载时发生。</p><pre><code>public void onSuccess (DataFetchStatus dFetchStatus, Object context);
</code></pre><p>参数</p><p>dFetchStatus DataFetchStatus</p><p>包含&quot;数据获取&quot;链上操作的当前处理状态信息的对象。</p><p>dFetchStatus中将包含如下返回信息，详细解释请参看DataFetchStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataFetch oDataFetch = new DataFetch() {
    @Override
    public void onFailure (DataFetchStatus dFetchStatus, Object context) {
      //事件触发条件：在&quot;数据获取&quot;链上操作处理失败，数据未被下载。
      String dataIDFromCaller = context;
      System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
      System.out.println(&quot;查询失败=&quot; + dFetchStatus.message);
    }
}
</code></pre><h5 id="onerror-14" tabindex="-1">onError <a class="header-anchor" href="#onerror-14" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在DataFetch调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(FetchException e, Object context);
</code></pre><p>示例：</p><pre><code>DataFetch oDataFetch = new DataFetch() {
    @Override
    public void onError(FetchException e, Object context) {
       //事件触发条件：DataFetch调用出现异常。并返回异常信息。
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h3 id="datadelete" tabindex="-1">DataDelete <a class="header-anchor" href="#datadelete" aria-label="Permalink to &quot;DataDelete&quot;">​</a></h3><p>用于进行结构数据删除的操作对象。</p><h4 id="构造函数-16" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-16" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="datadelete-frontend-string" tabindex="-1">DataDelete (Frontend, String) <a class="header-anchor" href="#datadelete-frontend-string" aria-label="Permalink to &quot;DataDelete (Frontend, String)&quot;">​</a></h5><pre><code>public DataDelete (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交数据删除前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

DataDelete oDataDelete = new DataDelete(oFrontend, businessDomainID);
</code></pre><h5 id="datadelete-1" tabindex="-1">DataDelete() <a class="header-anchor" href="#datadelete-1" aria-label="Permalink to &quot;DataDelete()&quot;">​</a></h5><p>构造一个DataDelete对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public DataDelete ();
</code></pre><h4 id="属性-16" tabindex="-1">属性 <a class="header-anchor" href="#属性-16" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-16" tabindex="-1">frontend <a class="header-anchor" href="#frontend-16" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-16" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-16" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要删除数据的链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="dataid-3" tabindex="-1">dataID <a class="header-anchor" href="#dataid-3" aria-label="Permalink to &quot;dataID&quot;">​</a></h5><p>设置要删除的链上数据的数据链上ID。</p><pre><code>public String dataID { set; get; }
</code></pre><h5 id="ownerid-6" tabindex="-1">ownerID <a class="header-anchor" href="#ownerid-6" aria-label="Permalink to &quot;ownerID&quot;">​</a></h5><p>设置数据所有者的数字身份标识。只有数据所有者才有权提交数据删除。</p><pre><code>public String ownerID { set; get; }
</code></pre><h5 id="eventcontext-15" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-15" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要删除的数据在链外应用系统数据库中的唯一标识
String dataIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oDataDelete.eventContext =dataIDFromCaller;
</code></pre><h4 id="方法-16" tabindex="-1">方法 <a class="header-anchor" href="#方法-16" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="submit-10" tabindex="-1">submit <a class="header-anchor" href="#submit-10" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;数据删除&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit(String ownerPrivateKey);
</code></pre><p><strong>参数</strong></p><p>ownerPrivateKey String</p><p>设置要删除的链上数据所有者的数字身份私钥，ownerID对应的私钥。私钥用于对&quot;数据删除&quot;上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--链上数据所有者数字身份私钥
String ownerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行数据删除上链操作提交
oDataDelete.submit (ownerPrivateKey);
</code></pre><h5 id="createtxbody-10" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-10" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;数据删除&quot;链上操作对应的上链交易体，以便使用ownerID中数字身份对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;数据删除&quot;上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;数据删除&quot;上链交易体
String dataDeleteTxBody= oDataDelete.createTxBody();
//用数据所有者数字身份对&quot;数据删除&quot;上链交易体进行签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
//--对&quot;数据删除&quot;上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(dataDeleteTxBody, ownerPrivateKey);
</code></pre><h5 id="submittxbody-10" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-10" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用数据删除上链交易体原文和ownerID中数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交&quot;数据删除&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submitTxBody(String dataDeleteTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>dataDeleteTxBody String</p><p>数据删除上链交易体原文</p><p>txSign String</p><p>数据删除上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备数据删除上链交易体
DataDelete oPrepareDataDeleteTxBody = new DataDelete();
oPrepareDataDeleteTxBody.dataID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareDataDeleteTxBody.ownerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 

String dataDeleteTxBody = oPrepareDataDeleteTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行dataDeleteTxBody签名
String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
String txSign = CryptoUtil.crypto.signature(dataDeleteTxBody, ownerPrivateKey);

//【程序A】提交数据删除上链交易，并跟踪链上处理状态
DataDelete oDataDelete = new DataDelete(frontendServer, businessDomainID);
oDataDelete.eventContext =dataIDFromCaller;
DataTxStatus oDataTxStatus = oDataDelete.submitTxBody (dataDeleteTxBody, txSign);
</code></pre><h4 id="事件-15" tabindex="-1">事件 <a class="header-anchor" href="#事件-15" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-10" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-10" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在数据删除上链交易执行成功，并获得落块确认时发生。</p><pre><code>public void onTxBlockConfirm(DataTxStatus dDeleteStatus, Object context);
</code></pre><p>参数</p><p>dDeleteStatus DataTxStatus</p><p>包含&quot;数据删除&quot;上链交易的当前处理状态信息的对象。</p><p>dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：</p><p>| status，errorCode，message，dataID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataDelete oDataDelete = new DataDelete() {
   @Override
    public void onTxBlockConfirm(DataTxStatus dDeleteStatus, Object context) {
       //事件触发条件：数据删除上链交易执行成功，并获得落块确认。
       DataTxBlockInfo oDataTxBlockInfo = dDeleteStatus.txBlockData;
       System.out.println(&quot;数据链上ID =&quot; + oDataTxBlockInfo.dataID);
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-10" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-10" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在数据删除上链交易落块确认失败，删除状态变更被链回滚时发生。事件触发后，会返回错误信息。数据删除上链交易需重新提交。</p><pre><code>public void onTxBlockCfmFailure(DataTxStatus dDeleteStatus, Object context);
</code></pre><p>参数</p><p>dDeleteStatus DataTxStatus</p><p>包含&quot;数据删除&quot;上链交易的当前处理状态信息的对象。</p><p>dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataDelete oDataDelete = new DataDelete() {
    @Override
    public void onTxBlockCfmFailure(DataTxStatus dDeleteStatus, Object context) {
       //事件触发条件：数据删除上链交易落块确认失败，删除状态变更被链回滚。
       //事件触发后，会返回错误信息。数据删除上链交易请求需重新提交。
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       DataTxBlockInfo oDataTxBlockInfo = dDeleteStatus.txBlockData;
       System.out.println(&quot;数据删除上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;数据删除上链交易落块确认失败的返回结果=&quot; + dDeleteStatus.message);
    }
}
</code></pre><h5 id="ontxsendsuccess-10" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-10" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在数据删除上链交易发送成功，等待区块链执行处理时发生。</p><pre><code>public void onTxSendSuccess(DataTxStatus dDeleteStatus, Object context);
</code></pre><p>参数</p><p>dDeleteStatus DataTxStatus</p><p>包含&quot;数据删除&quot;上链交易的当前处理状态信息的对象。</p><p>dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataDelete oDataDelete = new DataDelete() {
    @Override
    public void onTxSendSuccess(DataTxStatus dDeleteStatus, Object context) {
       //事件触发条件：数据删除上链交易发送成功，等待区块链执行处理。 
       DataTxBlockInfo oDataTxBlockInfo = dDeleteStatus.txBlockData;
       System.out.println(&quot;数据删除上链交易Hash =&quot; + oDataTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-10" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-10" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在数据删除上链交易发送失败时发生。数据删除上链交易需重新提交。</p><pre><code>public void onTxSendFailure(DataTxStatus dDeleteStatus, Object context);
</code></pre><p>参数</p><p>dDeleteStatus DataTxStatus</p><p>包含&quot;数据删除&quot;上链交易的当前处理状态信息的对象。</p><p>dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataDelete oDataDelete = new DataDelete() {
    @Override
    public void onTxSendFailure (DataTxStatus dDeleteStatus, Object context) {
       //事件触发条件：数据删除上链交易发送失败。
       //事件触发后，会返回错误信息。
       System.out.println(&quot;数据删除上链交易发送失败的返回结果=&quot; + dDeleteStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-10" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-10" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在数据删除上链交易执行成功，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(DataTxStatus dDeleteStatus, Object context);
</code></pre><p>参数</p><p>dDeleteStatus DataTxStatus</p><p>包含&quot;数据删除&quot;上链交易的当前处理状态信息的对象。</p><p>dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：</p><p>| status，errorCode，message，dataID，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataDelete oDataDelete = new DataDelete() {
    @Override
    public void onTxExecSuccess (DataTxStatus dDeleteStatus, Object context) {
       //事件触发条件：数据删除上链交易执行成功，等待落块确认。
       DataTxBlockInfo oDataTxBlockInfo = dDeleteStatus.txBlockData;
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       System.out.println(&quot;数据链上ID =&quot; + oDataTxBlockInfo.dataID);
       System.out.println(&quot;数据删除上链交易Hash=&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oDataTxBlockInfo.txExecTimestamp);
       System.out.println(&quot;交易所在区块hash=&quot; + oDataTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oDataTxBlockInfo.blockedTimestamp);
       System.out.println(&quot;交易所在区块高度=&quot; + oDataTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure-10" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-10" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在数据删除上链交易执行失败，删除状态变更未在链上生效时发生。事件触发后会返回错误信息。数据删除上链交易需重新提交。</p><pre><code>public void onTxExecFailure(DataTxStatus dDeleteStatus , Object context);
</code></pre><p>参数</p><p>dDeleteStatus DataTxStatus</p><p>包含&quot;数据删除&quot;上链交易的当前处理状态信息的对象。</p><p>dDeleteStatus中将包含如下返回信息，详细解释请参看DataTxStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataDelete oDataDelete = new DataDelete() {
    @Override
    public void onTxExecFailure(DataTxStatus dDeleteStatus, Object context) {
       //事件触发条件：数据删除上链交易执行失败，删除状态变更未在链上生效。 
       //事件触发后，会返回错误信息。删除状态变更上链交易请求需重新提交。
       DataTxBlockInfo oDataTxBlockInfo = dDeleteStatus.txBlockData;
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       System.out.println(&quot;数据链上ID =&quot; + oDataTxBlockInfo.dataID);
       System.out.println(&quot;删除状态变更上链交易Hash=&quot; + oDataTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oDataTxBlockInfo.txExecTimestamp);
       System.out.println(&quot;交易所在区块hash=&quot; + oDataTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oDataTxBlockInfo.blockedTimestamp);
       System.out.println(&quot;交易所在区块高度=&quot; + oDataTxBlockInfo.blockHeight);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + dDeleteStatus.message);
    }
}
</code></pre><h5 id="onerror-15" tabindex="-1">onError <a class="header-anchor" href="#onerror-15" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在DataDelete调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>DataDelete oDataDelete = new DataDelete() {
    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：DataDelete调用出现异常。并返回异常信息。
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h4 id="datatxstatus-status状态编码-3" tabindex="-1">DataTxStatus.status状态编码 <a class="header-anchor" href="#datatxstatus-status状态编码-3" aria-label="Permalink to &quot;DataTxStatus.status状态编码&quot;">​</a></h4><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td><td>节点确认接收数据删除上链交易请求，等待区块链执行处理。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td><td>节点接收数据删除上链交易请求失败，数据删除上链交易请求需重新提交。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td><td>数据删除上链交易执行成功，等待落块确认。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td><td>数据删除上链交易执行失败，删除状态变更未在链上生效。数据删除上链交易请求需重新提交。</td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td><td>数据删除上链交易执行成功，并获得落块确认</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td><td>因落块确认失败，删除状态变更被链回滚。数据删除上链交易请求需重新提交。</td></tr></tbody></table><h3 id="datadigestcheck" tabindex="-1">DataDigestCheck <a class="header-anchor" href="#datadigestcheck" aria-label="Permalink to &quot;DataDigestCheck&quot;">​</a></h3><p>用于进行链上结构数据体验真的操作对象。</p><h4 id="构造函数-17" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-17" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="datadigestcheck-frontend-string" tabindex="-1">DataDigestCheck (Frontend, String) <a class="header-anchor" href="#datadigestcheck-frontend-string" aria-label="Permalink to &quot;DataDigestCheck (Frontend, String)&quot;">​</a></h5><pre><code>public DataDigestCheck (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上查询请求前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

DataDigestCheck oDataDigestCheck = new DataDigestCheck(oFrontend, businessDomainID);
</code></pre><h5 id="datadigestcheck-1" tabindex="-1">DataDigestCheck () <a class="header-anchor" href="#datadigestcheck-1" aria-label="Permalink to &quot;DataDigestCheck ()&quot;">​</a></h5><p>构造一个DataDigestCheck对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public DataDigestCheck ();
</code></pre><h4 id="属性-17" tabindex="-1">属性 <a class="header-anchor" href="#属性-17" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-17" tabindex="-1">frontend <a class="header-anchor" href="#frontend-17" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-17" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-17" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要进行数据验真的结构数据所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="dataid-4" tabindex="-1">dataID <a class="header-anchor" href="#dataid-4" aria-label="Permalink to &quot;dataID&quot;">​</a></h5><p>设置要进行数据验真的链上数据的数据链上ID。</p><pre><code>public String dataID { set; get; }
</code></pre><h5 id="versionid-4" tabindex="-1">versionID <a class="header-anchor" href="#versionid-4" aria-label="Permalink to &quot;versionID&quot;">​</a></h5><p>设置要验证的链上数据指定版本的数据版本ID。如果此属性不赋值，则默认是和链上数据的最新版本（即当前版本）的数据指纹特征信息进行验证。</p><pre><code>public String versionID { set; get; }
</code></pre><h5 id="datadigest" tabindex="-1">dataDigest <a class="header-anchor" href="#datadigest" aria-label="Permalink to &quot;dataDigest&quot;">​</a></h5><p>本地结构数据体指纹特征值，用于验证本地结构数据是否和链上结构数据的特定版本的结构数据体一致，是否被篡改过。结构数据体内容如有任何微小的变化，对应的指纹特征值就会发生变化。</p><pre><code>public String dataDigest { set; get; }
</code></pre><h4 id="方法-17" tabindex="-1">方法 <a class="header-anchor" href="#方法-17" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="query-6" tabindex="-1">query <a class="header-anchor" href="#query-6" aria-label="Permalink to &quot;query&quot;">​</a></h5><p>以同步调用方式，向指定的前置节点服务器提交&quot;数据验真&quot;链上查询请求，开始进行数据验真链上操作。</p><pre><code>public DataDigestCheckStatus query();
</code></pre><p><strong>返回</strong></p><p>DataDigestCheckStatus</p><p>包含&quot;数据验真&quot;链上操作的查询结果信息。</p><h3 id="dataversionsfetch" tabindex="-1">DataVersionsFetch <a class="header-anchor" href="#dataversionsfetch" aria-label="Permalink to &quot;DataVersionsFetch&quot;">​</a></h3><p>用于进行链上结构数据历史版本列表获取的操作对象。</p><h4 id="构造函数-18" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-18" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="dataversionsfetch-frontend-string" tabindex="-1">DataVersionsFetch (Frontend, String) <a class="header-anchor" href="#dataversionsfetch-frontend-string" aria-label="Permalink to &quot;DataVersionsFetch (Frontend, String)&quot;">​</a></h5><pre><code>public DataVersionsFetch (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上获取请求前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

DataVersionsFetch oDataVerFetch = new DataVersionsFetch(oFrontend, businessDomainID);
</code></pre><h5 id="dataversionsfetch-1" tabindex="-1">DataVersionsFetch () <a class="header-anchor" href="#dataversionsfetch-1" aria-label="Permalink to &quot;DataVersionsFetch ()&quot;">​</a></h5><p>构造一个DataVersionsFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public DataVersionsFetch ();
</code></pre><h4 id="属性-18" tabindex="-1">属性 <a class="header-anchor" href="#属性-18" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-18" tabindex="-1">frontend <a class="header-anchor" href="#frontend-18" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-18" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-18" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要获取数据版本列表的结构数据所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="dataid-5" tabindex="-1">dataID <a class="header-anchor" href="#dataid-5" aria-label="Permalink to &quot;dataID&quot;">​</a></h5><p>设置要获取数据版本列表的链上结构数据的数据链上ID。</p><pre><code>public String dataID { set; get; }
</code></pre><h5 id="fetcherid-5" tabindex="-1">fetcherID <a class="header-anchor" href="#fetcherid-5" aria-label="Permalink to &quot;fetcherID&quot;">​</a></h5><p>设置要获取数据版本列表的获取者数字身份标识。数据获取者必须拥有数据读取权，owners、sharers、readers中的一个数字身份标识。</p><pre><code>public String fetcherID { set; get; }
</code></pre><h5 id="eventcontext-16" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-16" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要获取数据版本列表的数据在链外应用系统数据库中的唯一标识
String dataIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
DataVersionsFetch.eventContext =dataIDFromCaller;
</code></pre><h4 id="方法-18" tabindex="-1">方法 <a class="header-anchor" href="#方法-18" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="query-7" tabindex="-1">query <a class="header-anchor" href="#query-7" aria-label="Permalink to &quot;query&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;数据版本列表获取&quot;链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void query(String fetcherPrivateKey);
</code></pre><p><strong>参数</strong></p><p>fetcherPrivateKey String</p><p>设置要进行数据版本列表获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对&quot;数据版本列表获取&quot;链上获取请求进行签名确权。</p><p><strong>示例：</strong></p><pre><code>DataVersionsFetch oDataVerFetch = new DataVersionsFetch () {
    @Override
    public void onSuccess(DataVersionsFetchStatus dVerFetchStatus, Object context) {
     //事件触发条件：数据版本列表成功下载。
    }
};

//获取者数字身份私钥
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行&quot;数据版本列表获取&quot;链上操作提交
oDataVerFetch.query (fetcherPrivateKey);
</code></pre><h5 id="createrqbody-5" tabindex="-1">createRqBody <a class="header-anchor" href="#createrqbody-5" aria-label="Permalink to &quot;createRqBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;数据版本列表获取&quot;链上操作对应的链上获取请求体，以便使用fetcherID对应的私钥对链上获取请求体进行确权签名。</p><pre><code>public String createRqBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;数据版本列表获取&quot;链上获取请求体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;数据版本列表获取&quot;链上获取请求体
String dVerFetchRqBody= oDataVersionsFetch.createRqBody();
//用获取者数字身份对&quot;数据版本列表获取&quot;链上获取请求体进行签名
String fetcherPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
//--对&quot;数据版本列表获取&quot;链上获取请求体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(dVerFetchRqBody, fetcherPrivateKey);
</code></pre><h5 id="queryrqbody-5" tabindex="-1">queryRqBody <a class="header-anchor" href="#queryrqbody-5" aria-label="Permalink to &quot;queryRqBody&quot;">​</a></h5><p>使用数据版本列表获取链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交&quot;数据版本列表获取&quot;链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void queryRqBody (String dVerFetchRqBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>dVerFetchRqBody String</p><p>数据版本列表获取链上获取请求体原文</p><p>txSign String</p><p>数据版本列表获取链上获取请求体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备&quot;数据版本列表获取&quot;链上获取请求体
DataVersionsFetch oPrepareDVerFetchRqBody = new DataVersionsFetch();
oPrepareDVerFetchRqBody.dataID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareDVerFetchRqBody.fetcherID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String dVerFetchRqBody = oPrepareDVerFetchRqBody.createRqBody ();

//【程序B】在外部使用数字身份签名应用进行dVerFetchRqBody签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(dVerFetchRqBody, fetcherPrivateKey);

//【程序A】提交&quot;数据版本列表获取&quot;链上获取请求，并跟踪链上处理状态
DataVersionsFetch oDataVerFetch = new DataVersionsFetch (frontendServer, businessDomainID);
oDataVerFetch.eventContext =dataIDFromCaller;
oDataVerFetch.queryRqBody (dVerFetchRqBody, txSign);
</code></pre><h4 id="事件-16" tabindex="-1">事件 <a class="header-anchor" href="#事件-16" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="onsuccess-5" tabindex="-1">onSuccess <a class="header-anchor" href="#onsuccess-5" aria-label="Permalink to &quot;onSuccess&quot;">​</a></h5><p>此事件在&quot;数据版本列表获取&quot;链上操作处理彻底完成，数据版本列表已成功下载时发生。</p><pre><code>public void onSuccess (DataVersionsFetchStatus dVerFetchStatus, Object context);
</code></pre><p>参数</p><p>dVerFetchStatus DataVersionsFetchStatus</p><p>包含&quot;数据获取&quot;链上操作的当前处理状态信息的对象。</p><p>dVerFetchStatus中将包含如下返回信息，详细解释请参看DataVersionsFetchStatus对象相关描述：</p><p>| status，errorCode，message，versions |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataVersionsFetch oDataVersionsFetch = new DataVersionsFetch() {
    @Override
    public void onSuccess(DataVersionsFetchStatus dVerFetchStatus, Object context) {
       //事件触发条件：&quot;获取数据版本列表&quot;成功下载。
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       List&lt;DataVersionInfo&gt; oDataVersionInfo = dVerFetchStatus.versions;
       for (int i=0; i&lt; oDataVersionInfo.length; i++) {
         System.out.println(&quot;数据版本标识: &quot; + oDataVersionInfo[i].versionID);
         System.out.println(&quot;数据版本的生成时间戳: &quot; + oDataVersionInfo[i].timestamp);

         //获取指定版本的结构数据
         DataFetch oDataFetch = new DataFetch();

         //指定获取链上数据的数据链上ID。
         oDataFetch.dataID = &quot;21b73bac878c04a437b28962e51eb48b28962880&quot;;
         //指定获取链上数据的数据版本ID。
         oDataFetch.versionID = oDataVersionInfo[i].versionID;
                      ......
         //进行&quot;获取数据版本列表&quot;上链操作提交
         DataFetchStatus oDataFetchStatus = oDataFetch.query(fetcherPrivateKey);
       }
    }
}
</code></pre><h5 id="onfailure-5" tabindex="-1">onFailure <a class="header-anchor" href="#onfailure-5" aria-label="Permalink to &quot;onFailure&quot;">​</a></h5><p>此事件在&quot;数据版本列表获取&quot;链上操作处理失败，数据版本列表未被下载时发生。</p><pre><code>public void onSuccess (DataVersionsFetchStatus dVerFetchStatus, Object context);
</code></pre><p>参数</p><p>dVerFetchStatus DataVersionsFetchStatus</p><p>包含&quot;数据元数据获取&quot;链上操作的当前处理状态信息的对象。</p><p>dVerFetchStatus中将包含如下返回信息，详细解释请参看DataVersionsFetchStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataVersionsFetch oDataVersionsFetch = new DataVersionsFetch() {
    @Override
    public void onFailure(DataVersionsFetchStatus dVerFetchStatus, Object context) {
      //事件触发条件：&quot;数据版本列表获取&quot;链上操作处理失败，数据版本列表未被下载。
      String dataIDFromCaller = context;
      System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
      System.out.println(&quot;查询失败=&quot; + dVerFetchStatus.message);
    }
}
</code></pre><h5 id="onerror-16" tabindex="-1">onError <a class="header-anchor" href="#onerror-16" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在DataVersionsFetch调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(FetchException e, Object context);
</code></pre><p>示例：</p><pre><code>DataVersionsFetch oDataVersionsFetch = new DataVersionsFetch() {
    @Override
    public void onError(FetchException e, Object context) {
       //事件触发条件：DataVersionsFetch调用出现异常。并返回异常信息。
       String dataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + dataIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h3 id="datarightsfetch" tabindex="-1">DataRightsFetch <a class="header-anchor" href="#datarightsfetch" aria-label="Permalink to &quot;DataRightsFetch&quot;">​</a></h3><p>用于进行链上结构数据权限列表获取的操作对象。权限列表包括：所有者列表、分享者列表、读取者列表。</p><ul><li>结构数据所有者有权获取完整的所有者列表和所有者分别授权的读取者列表；完整的分享者列表和分享者分别授权的读取者列表。</li><li>结构数据分享者有权获取自己授权的读取者列表。</li><li>结构数据读取者无权获取结构数据权限列表。</li></ul><h4 id="构造函数-19" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-19" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="datarightsfetch-frontend-string" tabindex="-1">DataRightsFetch (Frontend, String) <a class="header-anchor" href="#datarightsfetch-frontend-string" aria-label="Permalink to &quot;DataRightsFetch (Frontend, String)&quot;">​</a></h5><pre><code>public DataRightsFetch (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交链上获取请求前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

DataRightsFetch oDataRightsFetch = new DataRightsFetch(oFrontend, businessDomainID);
</code></pre><h5 id="datarightsfetch-1" tabindex="-1">DataRightsFetch () <a class="header-anchor" href="#datarightsfetch-1" aria-label="Permalink to &quot;DataRightsFetch ()&quot;">​</a></h5><p>构造一个DataRightsFetch对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public DataRightsFetch ();
</code></pre><h4 id="属性-19" tabindex="-1">属性 <a class="header-anchor" href="#属性-19" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-19" tabindex="-1">frontend <a class="header-anchor" href="#frontend-19" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-19" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-19" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要获取结构数据权限列表的结构数据所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="dataid-6" tabindex="-1">dataID <a class="header-anchor" href="#dataid-6" aria-label="Permalink to &quot;dataID&quot;">​</a></h5><p>设置要获取结构数据权限列表的链上结构数据的结构数据链上ID。</p><pre><code>public String dataID { set; get; }
</code></pre><h5 id="fetcherid-6" tabindex="-1">fetcherID <a class="header-anchor" href="#fetcherid-6" aria-label="Permalink to &quot;fetcherID&quot;">​</a></h5><p>设置要获取结构数据权限列表的获取者数字身份标识，owners、sharers、readers中的一个数字身份标识。</p><pre><code>public String fetcherID { set; get; }
</code></pre><h5 id="eventcontext-17" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-17" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//要获取结构数据权限列表的结构数据在链外应用系统数据库中的唯一标识
String DataIDFromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
DataRightsFetch.eventContext =DataIDFromCaller;
</code></pre><h4 id="方法-19" tabindex="-1">方法 <a class="header-anchor" href="#方法-19" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="query-8" tabindex="-1">query <a class="header-anchor" href="#query-8" aria-label="Permalink to &quot;query&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;结构数据权限列表获取&quot;链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void query(String fetcherPrivateKey);
</code></pre><p><strong>参数</strong></p><p>fetcherPrivateKey String</p><p>设置要进行结构数据权限列表获取的获取者数字身份私钥，fetcherID对应的私钥。私钥用于对&quot;结构数据权限列表获取&quot;链上获取请求进行签名确权。</p><p><strong>示例：</strong></p><pre><code>DataRightsFetch oDataRightsFetch = new DataRightsFetch () {
    @Override
    public void onSuccess(DataRightsFetchStatus dRightsFetchStatus, Object context) {
     //事件触发条件：结构数据权限列表成功下载。
    }
};

//获取者数字身份私钥
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行&quot;结构数据权限列表获取&quot;链上操作提交
oDataRightsFetch.query (fetcherPrivateKey);
</code></pre><h5 id="createrqbody-6" tabindex="-1">createRqBody <a class="header-anchor" href="#createrqbody-6" aria-label="Permalink to &quot;createRqBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;结构数据权限列表获取&quot;链上操作对应的链上获取请求体，以便使用fetcherID对应的私钥对链上获取请求体进行确权签名。</p><pre><code>public String createRqBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;结构数据权限列表获取&quot;链上获取请求体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;结构数据权限列表获取&quot;链上获取请求体
String dRightsFetchRqBody= oDataRightsFetch.createRqBody();
//用获取者数字身份对&quot;结构数据权限列表获取&quot;链上获取请求体进行签名
String fetcherPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
//--对&quot;结构数据权限列表获取&quot;链上获取请求体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(dRightsFetchRqBody, fetcherPrivateKey);
</code></pre><h5 id="queryrqbody-6" tabindex="-1">queryRqBody <a class="header-anchor" href="#queryrqbody-6" aria-label="Permalink to &quot;queryRqBody&quot;">​</a></h5><p>使用结构数据权限列表获取链上获取请求体原文和fetcherID中数字身份对获取请求体的签名结果信息，向指定的前置节点服务器提交&quot;结构数据权限列表获取&quot;链上获取请求。调用此方法，将会通过onSuccess 和onFailure事件返回查询结果。</p><pre><code>public void queryRqBody (String dRightsFetchRqBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>dRightsFetchRqBody String</p><p>结构数据权限列表获取链上获取请求体原文</p><p>txSign String</p><p>结构数据权限列表获取链上获取请求体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备&quot;结构数据权限列表获取&quot;链上获取请求体
DataRightsFetch oPrepareDRightsFetchRqBody = new DataRightsFetch();
oPrepareDRightsFetchRqBody.dataID = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareDRightsFetchRqBody.fetcherID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
String dRightsFetchRqBody = oPrepareDRightsFetchRqBody.createRqBody ();

//【程序B】在外部使用数字身份签名应用进行dRightsFetchRqBody签名
String fetcherPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
String txSign = CryptoUtil.crypto.signature(dRightsFetchRqBody, fetcherPrivateKey);

//【程序A】提交&quot;结构数据权限列表获取&quot;链上获取请求，并跟踪链上处理状态
DataRightsFetch oDataRightsFetch = new DataRightsFetch (frontendServer, businessDomainID);
oDataRightsFetch.eventContext =DataIDFromCaller;
oDataRightsFetch.queryRqBody (dRightsFetchRqBody, txSign);
</code></pre><h4 id="事件-17" tabindex="-1">事件 <a class="header-anchor" href="#事件-17" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="onsuccess-6" tabindex="-1">onSuccess <a class="header-anchor" href="#onsuccess-6" aria-label="Permalink to &quot;onSuccess&quot;">​</a></h5><p>此事件在&quot;结构数据权限列表获取&quot;链上操作处理彻底完成，结构数据权限列表已成功下载时发生。</p><pre><code>public void onSuccess (DataRightsFetchStatus dRightsFetchStatus, Object context);
</code></pre><p>参数</p><p>dRightsFetchStatus DataRightsFetchStatus</p><p>包含&quot;结构数据权限列表获取&quot;链上操作的当前处理状态信息的对象。</p><p>dRightsFetchStatus中将包含如下返回信息，详细解释请参看DataRightsFetchStatus对象相关描述：</p><p>| status，errorCode，message，dataRights |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataRightsFetch oDataRightsFetch = new DataRightsFetch() {
    @Override
    public void onSuccess(DataRightsFetchStatus dRightsFetchStatus, Object context) {
       //事件触发条件：在&quot;获取结构数据权限列表&quot;成功下载。
       String DataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + DataIDFromCaller);
       DataRightsInfo oDataRightsInfo = dRightsFetchStatus.dataRights;

       for (int i=0; i&lt; oDataRightsInfo.owners.length; i++) {
         System.out.println(&quot;结构数据所有者身份标识: &quot; + oDataRightsInfo.owners[i]);
       }

       //结构数据所有者所授权的分享者列表 
       SharerList[] oSharersSetByOwner = dRightsFetchStatus.sharersByOwner;
       for (int j=0; j&lt; oSharersSetByOwner.length; j++) {
         System.out.println(&quot;有授权分享者的结构数据所有者数字身份标识=&quot; + oSharersSetByOwner[j].ownerID);
         for (int n=0; n&lt; oSharersSetByOwner[j].sharers.length; n++) {
            System.out.println(&quot;当前结构数据所有者授权的分享者数字身份标识=&quot; + oSharersSetByOwner[i].sharers[n]);
         }
       }
    }
}
</code></pre><h5 id="onfailure-6" tabindex="-1">onFailure <a class="header-anchor" href="#onfailure-6" aria-label="Permalink to &quot;onFailure&quot;">​</a></h5><p>此事件在&quot;获取结构数据权限列表&quot;链上操作处理失败，结构数据权限列表未被下载时发生。</p><pre><code>public void onSuccess (DataRightsFetchStatus dRightsFetchStatus, Object context);
</code></pre><p>参数</p><p>dRightsFetchStatus DataRightsFetchStatus</p><p>包含&quot;获取结构数据权限列表&quot;链上操作的当前处理状态信息的对象。</p><p>dRightsFetchStatus中将包含如下返回信息，详细解释请参看DataRightsFetchStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>DataRightsFetch oDataRightsFetch = new DataRightsFetch() {
    @Override
    public void onFailure(DataRightsFetchStatus dRightsFetchStatus, Object context) {
      //事件触发条件：在&quot;获取结构数据权限列表&quot;链上操作处理失败，结构数据权限列表未被下载。
      String DataIDFromCaller = context;
      System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + DataIDFromCaller);
      System.out.println(&quot;查询失败=&quot; + dRightsFetchStatus.message);
    }
}
</code></pre><h5 id="onerror-17" tabindex="-1">onError <a class="header-anchor" href="#onerror-17" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在DataRightsFetch调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(FetchException e, Object context);
</code></pre><p>示例：</p><pre><code>DataRightsFetch oDataRightsFetch = new DataRightsFetch() {
    @Override
    public void onError(FetchException e, Object context) {
       //事件触发条件：DataRightsFetch调用出现异常。并返回异常信息。
       String DataIDFromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + DataIDFromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h2 id="com-coolawchain-sdk-contract" tabindex="-1">com.coolawchain.sdk.contract <a class="header-anchor" href="#com-coolawchain-sdk-contract" aria-label="Permalink to &quot;com.coolawchain.sdk.contract&quot;">​</a></h2><h3 id="contractcall" tabindex="-1">ContractCall <a class="header-anchor" href="#contractcall" aria-label="Permalink to &quot;ContractCall&quot;">​</a></h3><p>用于进行链上合约调用的操作对象。</p><h4 id="构造函数-20" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-20" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><h5 id="contractcall-frontend-string" tabindex="-1">ContractCall (Frontend, String) <a class="header-anchor" href="#contractcall-frontend-string" aria-label="Permalink to &quot;ContractCall (Frontend, String)&quot;">​</a></h5><pre><code>public ContractCall (Frontend frontendServer, String businessDomainID);
</code></pre><p><strong>参数</strong></p><p>frontendServer Frontend</p><p>前置节点服务器对象。</p><p>businessDomainID String</p><p>设置要访问的业务域标识。初始化时可以为空，后续可通过bizDomain属性赋值。businessDomainID在提交上链交易前必须赋值。</p><p>示例：</p><pre><code>//初始化前置节点对象（即链上操作发送对象）
//--业务系统数字身份标识
String systemID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
//--业务系统数字身份私钥
String systemPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//--前置节点调用接口地址
String frontendUrl = &quot;http://127.1.1.1:9000/fbs/&quot;;
//创建前置节点对象
Frontend oFrontend = new Frontend(systemID, systemPrivateKey, frontendUrl);
//设置要访问的业务域标识
String businessDomainID = &quot;51eb48b51eb48b2896288021b73bac878c48b289&quot;;

ContractCall oContractCall = new ContractCall (oFrontend, businessDomainID);
</code></pre><h5 id="contractcall-1" tabindex="-1">ContractCall () <a class="header-anchor" href="#contractcall-1" aria-label="Permalink to &quot;ContractCall ()&quot;">​</a></h5><p>构造一个ContractCall对象。后续需赋值要访问前置节点对象和要访问的业务域。</p><pre><code>public ContractCall ();
</code></pre><h4 id="属性-20" tabindex="-1">属性 <a class="header-anchor" href="#属性-20" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="frontend-20" tabindex="-1">frontend <a class="header-anchor" href="#frontend-20" aria-label="Permalink to &quot;frontend&quot;">​</a></h5><p>设置要访问的前置节点服务器对象。</p><pre><code>public Frontend frontend { set; get; }
</code></pre><h5 id="bizdomain-20" tabindex="-1">bizDomain <a class="header-anchor" href="#bizdomain-20" aria-label="Permalink to &quot;bizDomain&quot;">​</a></h5><p>设置要更新元数据的文件所在链上业务域的唯一标识。</p><pre><code>public String bizDomain { set; get; }
</code></pre><h5 id="scaddress" tabindex="-1">scAddress <a class="header-anchor" href="#scaddress" aria-label="Permalink to &quot;scAddress&quot;">​</a></h5><p>设置要调用的链上合约地址。</p><pre><code>public String scAddress { set; get; }
</code></pre><h5 id="callerid" tabindex="-1">callerID <a class="header-anchor" href="#callerid" aria-label="Permalink to &quot;callerID&quot;">​</a></h5><p>设置合约调用者数字身份标识。</p><pre><code>public String callerID { set; get; }
</code></pre><p>示例：</p><pre><code>String callerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;;
oContractCall.callerID = callerID;
</code></pre><h5 id="schexparam" tabindex="-1">scHexParam <a class="header-anchor" href="#schexparam" aria-label="Permalink to &quot;scHexParam&quot;">​</a></h5><p>设置合约方法调用参数。此属性保存的是经过序列化后的参数体。参数体序列化方式由编写合约的开发者提供规范。</p><pre><code>public String scHexParam { set; get; }
</code></pre><h5 id="eventcontext-18" tabindex="-1">eventContext <a class="header-anchor" href="#eventcontext-18" aria-label="Permalink to &quot;eventContext&quot;">​</a></h5><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。</p><pre><code>public Object eventContext { set; get; }
</code></pre><p>示例：</p><pre><code>//合约调用对应的链外应用系统调用端的参考标识，便于事件中进行后续业务逻辑处理。
String scIDfromCaller = &quot;57bee7e51eb48b2896288021b7374cfc78c0bac8&quot;;
oContractCall.eventContext = scIDfromCaller;
</code></pre><h4 id="方法-20" tabindex="-1">方法 <a class="header-anchor" href="#方法-20" aria-label="Permalink to &quot;方法&quot;">​</a></h4><h5 id="submit-11" tabindex="-1">submit <a class="header-anchor" href="#submit-11" aria-label="Permalink to &quot;submit&quot;">​</a></h5><p>向指定的前置节点服务器提交&quot;合约调用&quot;上链交易请求，开始进行合约调用链上操作。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submit(String callerPrivateKey);
</code></pre><p><strong>参数</strong></p><p>callerPrivateKey String</p><p>设置合约调用者的数字身份私钥。私钥用于对&quot;合约调用&quot;上链交易进行签名确权。</p><p><strong>示例：</strong></p><pre><code>//--链上调用者数字身份私钥
String callerPrivateKey = &quot;8d0422cca53480c6b8d0422cca5341a948e91c50c915a4576c88b53de9c473cc&quot;;
//进行合约调用上链操作提交
oContractCall.submit (callerPrivateKey);
</code></pre><h5 id="createtxbody-11" tabindex="-1">createTxBody <a class="header-anchor" href="#createtxbody-11" aria-label="Permalink to &quot;createTxBody&quot;">​</a></h5><p>和前置节点进行交互，生成&quot;合约调用&quot;链上操作对应的上链交易体，以便使用调用者数字身份对应的私钥对上链交易体进行确权签名。</p><pre><code>public String createTxBody();
</code></pre><p><strong>返回</strong></p><p>String</p><p>序列化的&quot;合约调用&quot;上链交易体。</p><p><strong>示例：</strong></p><pre><code>//生成&quot;合约调用&quot;上链交易体
String scCallTxBody= oContractCall.createTxBody();
//用调用者数字身份对&quot;合约调用&quot;上链交易体进行签名
String callerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
//--对&quot;合约调用&quot;上链交易体进行签名，并生成签名结果
String txSign = CryptoUtil.crypto.signature(scCallTxBody, callerPrivateKey);
</code></pre><h5 id="submittxbody-11" tabindex="-1">submitTxBody <a class="header-anchor" href="#submittxbody-11" aria-label="Permalink to &quot;submitTxBody&quot;">​</a></h5><p>使用合约调用上链交易体原文和调用者数字身份对上链交易体的签名结果信息，向指定的前置节点服务器提交&quot;合约调用&quot;上链交易请求。调用此方法，将会通过onTxBlockConfirm、onTxSendSuccess等事件返回链上处理结果。</p><pre><code>public void submitTxBody(String scCallTxBody, String txSign);
</code></pre><p><strong>参数</strong></p><p>scCallTxBody String</p><p>合约调用上链交易体原文</p><p>txSign String</p><p>合约调用上链交易体签名结果信息</p><p><strong>示例：</strong></p><pre><code>//【程序A】准备合约调用上链交易体
ContractCall oPrepareSCCallTxBody = new ContractCall();
oPrepareFileUploadTxBody.scAddress = &quot;88021b73bac8b248b2896278c04a4378962e51eb&quot;;
oPrepareFileUploadTxBody.callerID = &quot;0d64ad368ebc37ddb80424376408cb7bb88ff328&quot;; 
oContractCall.scHexParam = SCHexParam;

String scCallTxBody= oPrepareSCCallTxBody.createTxBody();

//【程序B】在外部使用数字身份签名应用进行scCallTxBody签名
String callerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
String txSign = CryptoUtil.crypto.signature(scCallTxBody, callerPrivateKey);


//【程序A】提交合约调用上链交易，并跟踪链上处理状态
ContractCall oContractCall = new FileUpload (frontendServer, businessDomainID);
oContractCall.eventContext = scIDfromCaller;
oContractCall.submitTxBody (scCallTxBody, txSign);
</code></pre><h4 id="事件-18" tabindex="-1">事件 <a class="header-anchor" href="#事件-18" aria-label="Permalink to &quot;事件&quot;">​</a></h4><h5 id="ontxblockconfirm-11" tabindex="-1">onTxBlockConfirm <a class="header-anchor" href="#ontxblockconfirm-11" aria-label="Permalink to &quot;onTxBlockConfirm&quot;">​</a></h5><p>此事件在合约调用成功，并获得落块确认时发生。</p><pre><code>public void onTxBlockConfirm(ContractCallStatus scCallStatus, Object context);
</code></pre><p>参数</p><p>scCallStatus ContractCallStatus</p><p>包含&quot;合约调用&quot;链上操作的当前处理状态信息的对象。</p><p>scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：</p><p>| status，errorCode，message，scHexReturnData，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>ContractCall oContractCall = new ContractCall() {
    @Override
    public void onTxBlockConfirm(ContractCallStatus scCallStatus, Object context) {
       //事件触发条件：合约调用成功，并获得落块确认。
       SCTxBlockInfo oSCTxBlockInfo = scCallStatus.txBlockData;
       System.out.println(&quot;合约调用返回结果=&quot; + scCallStatus.scHexReturnData);
       String scIDfromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + scIDfromCaller);
    }
}
</code></pre><h5 id="ontxblkcfmfailure-11" tabindex="-1">onTxBlkCfmFailure <a class="header-anchor" href="#ontxblkcfmfailure-11" aria-label="Permalink to &quot;onTxBlkCfmFailure&quot;">​</a></h5><p>此事件在合约调用上链交易落块确认失败，合约调用影响的链上数据变化被链回滚时发生。事件触发后，会返回错误信息。合约调用上链交易请求需重新提交。</p><pre><code>public void onTxBlockCfmFailure(ContractCallStatus scCallStatus, Object context);
</code></pre><p>参数</p><p>scCallStatus ContractCallStatus</p><p>包含&quot;合约调用&quot;链上操作的当前处理状态信息的对象。</p><p>scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>ContractCall oContractCall = new ContractCall() {
    @Override
    public void onTxBlockCfmFailure(ContractCallStatus scCallStatus, Object context) {
       //事件触发条件：合约调用上链交易落块确认失败，合约调用影响的链上数据变化被链回滚。
       //事件触发后，会返回错误信息。合约调用上链交易请求需重新提交。
       SCTxBlockInfo oSCTxBlockInfo = scCallStatus.txBlockData;
       System.out.println(&quot;合约调用上链交易Hash =&quot; + oSCTxBlockInfo.txHash);
       System.out.println(&quot;合约调用上链交易落块确认失败的返回结果=&quot; + scCallStatus.message);
       String scIDfromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + scIDfromCaller);
    }
}
</code></pre><h5 id="ontxsendsuccess-11" tabindex="-1">onTxSendSuccess <a class="header-anchor" href="#ontxsendsuccess-11" aria-label="Permalink to &quot;onTxSendSuccess&quot;">​</a></h5><p>此事件在合约调用上链交易发送成功，等待区块链执行处理时发生。</p><pre><code>public void onTxSendSuccess(ContractCallStatus scCallStatus, Object context);
</code></pre><p>参数</p><p>scCallStatus ContractCallStatus</p><p>包含&quot;合约调用&quot;链上操作的当前处理状态信息的对象。</p><p>scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：</p><p>| status，errorCode，message，txHash |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>ContractCall oContractCall = new ContractCall(){
    @Override
    public void onTxSendSuccess(ContractCallStatus scCallStatus, Object context) {
       //事件触发条件：合约调用上链交易发送成功，等待区块链执行处理。 
       SCTxBlockInfo oSCTxBlockInfo = scCallStatus.txBlockData;
       System.out.println(&quot;合约调用上链交易Hash =&quot; + oSCTxBlockInfo.txHash);
    }
}
</code></pre><h5 id="ontxsendfailure-11" tabindex="-1">onTxSendFailure <a class="header-anchor" href="#ontxsendfailure-11" aria-label="Permalink to &quot;onTxSendFailure&quot;">​</a></h5><p>此事件在合约调用上链交易发送失败时发生。合约调用上链交易请求需重新提交。</p><pre><code>public void onTxSendFailure(ContractCallStatus scCallStatus, Object context);
</code></pre><p>参数</p><p>scCallStatus ContractCallStatus</p><p>包含&quot;合约调用&quot;链上操作的当前处理状态信息的对象。</p><p>scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：</p><p>| errorCode，message |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>ContractCall oContractCall = new ContractCall() {
    @Override
    public void onTxSendFailure(ContractCallStatus scCallStatus, Object context) {
       //事件触发条件：合约调用上链交易发送失败。
       System.out.println(&quot;合约调用上链交易发送失败的返回结果=&quot; + scCallStatus.message);
    }
}
</code></pre><h5 id="ontxexecsuccess-11" tabindex="-1">onTxExecSuccess <a class="header-anchor" href="#ontxexecsuccess-11" aria-label="Permalink to &quot;onTxExecSuccess&quot;">​</a></h5><p>此事件在合约调用上链交易执行成功，等待落块确认时发生。</p><pre><code>public void onTxExecSuccess(ContractCallStatus scCallStatus, Object context);
</code></pre><p>参数</p><p>scCallStatus ContractCallStatus</p><p>包含&quot;合约调用&quot;链上操作的当前处理状态信息的对象。</p><p>scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：</p><p>| status，errorCode，message，scHexReturnData，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>ContractCall oContractCall = new ContractCall(){
    @Override
    public void onTxExecSuccess(ContractCallStatus scCallStatus, Object context) {
       //事件触发条件：合约调用上链交易执行成功，等待落块确认。
       SCTxBlockInfo oSCTxBlockInfo = scCallStatus.txBlockData;
       System.out.println(&quot;合约调用返回结果=&quot; + scCallStatus.scHexReturnData);
       String scIDfromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + scIDfromCaller);
       System.out.println(&quot;合约调用上链交易Hash=&quot; + oSCTxBlockInfo.txHash);
       System.out.println(&quot;交易执行时间戳=&quot; + oSCTxBlockInfo.txExecTimestamp.toString());
       System.out.println(&quot;交易所在区块hash=&quot; + oSCTxBlockInfo.blockHash);
       System.out.println(&quot;交易所在区块生成时间戳&quot; + oSCTxBlockInfo.blockedTimestamp.toString());
       System.out.println(&quot;交易所在区块高度=&quot; + oSCTxBlockInfo.blockHeight);
    }
}
</code></pre><h5 id="ontxexecfailure-11" tabindex="-1">onTxExecFailure <a class="header-anchor" href="#ontxexecfailure-11" aria-label="Permalink to &quot;onTxExecFailure&quot;">​</a></h5><p>此事件在合约调用上链交易执行失败，合约调用影响的链上数据变化未上链生效时发生。事件触发后会返回错误信息。文件元数据上链交易请求需重新提交。</p><pre><code>public void onTxExecFailure(ContractCallStatus scCallStatus, Object context);
</code></pre><p>参数</p><p>scCallStatus ContractCallStatus</p><p>包含&quot;合约调用&quot;链上操作的当前处理状态信息的对象。</p><p>scCallStatus中将包含如下返回信息，详细解释请参看ContractCallStatus对象相关描述：</p><p>| status，errorCode，message，txHash，txExecTimestamp，blockHash，blockedTimestamp，blockHeight |</p><p>context Object</p><p>设置需要传入事件中的业务逻辑信息，便于事件中进行后续业务逻辑处理。如果没有可传入的信息，此参数可以不用赋值。</p><p>示例：</p><pre><code>ContractCall oContractCall = new ContractCall(){
    @Override
    public void onTxExecFailure(ContractCallStatus scCallStatus, Object context) {
       //事件触发条件：合约调用上链交易执行失败，合约调用影响的链上数据变化未上链生效。
       SCTxBlockInfo oSCTxBlockInfo = scCallStatus.txBlockData;
       String scIDfromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + scIDfromCaller);
       System.out.println(&quot;结构数据保存上链交易Hash =&quot; + oSCTxBlockInfo.txHash);
       System.out.println(&quot;链上执行失败的返回结果=&quot; + scCallStatus.message);
    }
}
</code></pre><h5 id="onerror-18" tabindex="-1">onError <a class="header-anchor" href="#onerror-18" aria-label="Permalink to &quot;onError&quot;">​</a></h5><p>此为事件在ContractCall调用出现异常时发生。事件触发后返回异常信息。</p><pre><code>public void onError(TxException e, Object context);
</code></pre><p>示例：</p><pre><code>ContractCall oContractCall = new ContractCall() {
    @Override
    public void onError(TxException e, Object context) {
       //事件触发条件：ContractCall调用出现异常。并返回异常信息。
       String scIDfromCaller = context;
       System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + scIDfromCaller);
       System.out.println(&quot;异常状态描述=&quot; + e.state);
       System.out.println(&quot;异常信息=&quot; + e.exc);
    }
}
</code></pre><h2 id="com-coolawchain-sdk-model" tabindex="-1">com.coolawchain.sdk.model <a class="header-anchor" href="#com-coolawchain-sdk-model" aria-label="Permalink to &quot;com.coolawchain.sdk.model&quot;">​</a></h2><h3 id="frontend-21" tabindex="-1">Frontend <a class="header-anchor" href="#frontend-21" aria-label="Permalink to &quot;Frontend&quot;">​</a></h3><p>链外应用系统调用的前置节点对象。</p><h4 id="构造函数-21" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数-21" aria-label="Permalink to &quot;构造函数&quot;">​</a></h4><pre><code>public Frontend(String systemPrivateKey,String frontendUrl); public Frontend();
</code></pre><h4 id="属性-21" tabindex="-1">属性 <a class="header-anchor" href="#属性-21" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="systemprivatekey" tabindex="-1">systemPrivateKey <a class="header-anchor" href="#systemprivatekey" aria-label="Permalink to &quot;systemPrivateKey&quot;">​</a></h5><p>要访问区块链系统内特定业务域中链上数据的链外应用系统的业务系统数字身份信息。</p><pre><code>public String systemID { set; get; }
</code></pre><p>属性值</p><p>String</p><p>设置要进行链上操作的链外应用系统的业务系统数字身份信息私钥。相应的业务系统身份标识必须获得区块链中特定业务域的访问许可授权。</p><h5 id="frontendurl" tabindex="-1">frontendUrl <a class="header-anchor" href="#frontendurl" aria-label="Permalink to &quot;frontendUrl&quot;">​</a></h5><p>设置链外应用系统要调用的前置节点的访问地址。链外应用系统必须通过前置节点与区块链节点服务器间建立的安全通道，方可与区块链系统进行数据交互。</p><pre><code>public String frontendUrl { set; get; }
</code></pre><p>属性值</p><p>String</p><p>前置节点的访问地址。</p><p>示例：</p><pre><code>String systemPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
KeyPairs systemKeyPair = CryptoUtil.crypto.genAccountKey(systemPrivateKey);
</code></pre><h3 id="filetxstatus" tabindex="-1">FileTxStatus <a class="header-anchor" href="#filetxstatus" aria-label="Permalink to &quot;FileTxStatus&quot;">​</a></h3><p>链上文件相关交易事件回调对象。</p><h4 id="属性-22" tabindex="-1">属性 <a class="header-anchor" href="#属性-22" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status" tabindex="-1">status <a class="header-anchor" href="#status" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>文件上链操作的当前处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><h5 id="errorcode" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message" tabindex="-1">message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="txblockdata" tabindex="-1">txBlockData <a class="header-anchor" href="#txblockdata" aria-label="Permalink to &quot;txBlockData&quot;">​</a></h5><p>链上交易结构化数据。</p><pre><code>public FileTxBlockInfo txBlockData{ set; get; }
</code></pre><ul><li>FileTxBlockInfo</li></ul><p>文件链上信息。</p><ul><li><p>属性</p><ul><li>fileID</li></ul></li></ul><p>文件链上唯一ID。</p><pre><code>private String fileID{ set; get; }
</code></pre><ul><li>versionID</li></ul><p>文件链上版本ID。</p><pre><code>private String versionID{ set; get; }
</code></pre><ul><li>txHash</li></ul><p>上链交易对应的Hash</p><pre><code>private String txHash{ set; get; }
</code></pre><ul><li>txExecTimestamp</li></ul><p>上链交易被执行的时间</p><pre><code>private String txExecTimestamp{ set; get; }
</code></pre><ul><li>blockHash</li></ul><p>上链交易所在区块的hash。</p><pre><code>private String blockHash{ set; get; }
</code></pre><ul><li>blockHeight</li></ul><p>上链交易所在区块高度。</p><pre><code>private long blockHeight{ set; get; }
</code></pre><ul><li>blockedTimestamp</li></ul><p>上链交易所在区块的生成时间戳</p><pre><code>private long currentBlockHeight{ set; get; }
</code></pre><ul><li>currentBlockHeight</li></ul><p>区块链当前区块高度</p><pre><code>private long currentBlockHeight{ set; get; }
</code></pre><h3 id="filemetafetchstatus" tabindex="-1">FileMetaFetchStatus <a class="header-anchor" href="#filemetafetchstatus" aria-label="Permalink to &quot;FileMetaFetchStatus&quot;">​</a></h3><p>链上文件元数据查询事件回调对象。</p><h4 id="属性-23" tabindex="-1">属性 <a class="header-anchor" href="#属性-23" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-1" tabindex="-1">status <a class="header-anchor" href="#status-1" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>文件元数据获取的处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th></tr></thead><tbody><tr><td>FetchSuccess</td><td>文件元数据获取成功。</td></tr><tr><td>FetchFailure</td><td>文件元数据获取失败。</td></tr></tbody></table><h5 id="errorcode-1" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-1" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-1" tabindex="-1">message <a class="header-anchor" href="#message-1" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="filemeta" tabindex="-1">fileMeta <a class="header-anchor" href="#filemeta" aria-label="Permalink to &quot;fileMeta&quot;">​</a></h5><p>链上文件元数据。</p><pre><code>public FileMeta fileMeta { set; get; }
</code></pre><ul><li>FileMeta</li></ul><p>链上存储结构化信息。</p><ul><li><p>属性</p><ul><li>fileID</li></ul></li></ul><p>文件链上唯一ID。</p><pre><code>private String fileID{ set; get; }
</code></pre><ul><li>versionID</li></ul><p>结构化数据链上版本ID。</p><pre><code>private String versionID{ set; get; }
</code></pre><ul><li>fileName</li></ul><p>文件名称</p><pre><code>private String fileName{ set; get; }
</code></pre><ul><li>fileSuffix</li></ul><p>文件扩展名</p><pre><code>private String fileSuffix{ set; get; }
</code></pre><ul><li>fileSize</li></ul><p>文件大小</p><pre><code>private long fileSize{ set; get; }
</code></pre><ul><li>fileDescription</li></ul><p>文件描述</p><pre><code>private String fileDescription{ set; get; }
</code></pre><ul><li>fileProperty</li></ul><p>文件附属属性</p><pre><code>private String fileProperty{ set; get; }
</code></pre><ul><li>fileCopy</li></ul><p>文件副本数量</p><pre><code>private int fileCopy{ set; get; }
</code></pre><ul><li>fileSlice</li></ul><p>文件切片数量</p><pre><code>private int fileSlice{ set; get; }
</code></pre><ul><li>fileDigest</li></ul><p>文件本体指纹特征值</p><pre><code>private String fileDigest{ set; get; }
</code></pre><ul><li>uploadTime</li></ul><p>文件上链保存时间</p><pre><code>private long uploadTime{ set; get; }
</code></pre><ul><li>delStatus</li></ul><p>结构化数据删除状态 1=删除；0=有效。</p><pre><code>private int delStatus{ set; get; }
</code></pre><ul><li>metaTimestamp</li></ul><p>当前版本元数据的生成时间戳</p><pre><code>private long metaTimestamp{ set; get; }
</code></pre><h3 id="filefetchstatus" tabindex="-1">FileFetchStatus <a class="header-anchor" href="#filefetchstatus" aria-label="Permalink to &quot;FileFetchStatus&quot;">​</a></h3><p>链上文件下载事件回调对象。</p><h4 id="属性-24" tabindex="-1">属性 <a class="header-anchor" href="#属性-24" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-2" tabindex="-1">status <a class="header-anchor" href="#status-2" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>文件本体获取的处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th></tr></thead><tbody><tr><td>FetchSuccess</td><td>文件本体获取成功。</td></tr><tr><td>FetchFailure</td><td>文件本体获取失败。</td></tr></tbody></table><h5 id="errorcode-2" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-2" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-2" tabindex="-1">message <a class="header-anchor" href="#message-2" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="filebody" tabindex="-1">fileBody <a class="header-anchor" href="#filebody" aria-label="Permalink to &quot;fileBody&quot;">​</a></h5><p>链上文件。</p><pre><code>public File fileBody{ set; get; }
</code></pre><h3 id="filedigestcheckstatus" tabindex="-1">FileDigestCheckStatus <a class="header-anchor" href="#filedigestcheckstatus" aria-label="Permalink to &quot;FileDigestCheckStatus&quot;">​</a></h3><p>文件内容指纹与链上数据指纹一致性校验。</p><h4 id="属性-25" tabindex="-1">属性 <a class="header-anchor" href="#属性-25" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-3" tabindex="-1">status <a class="header-anchor" href="#status-3" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>指纹特征值获取的处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th></tr></thead><tbody><tr><td>FetchSuccess</td><td>文件指纹特征值获取成功。</td></tr><tr><td>FetchFailure</td><td>文件指纹特征值获取失败。</td></tr></tbody></table><h5 id="errorcode-3" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-3" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-3" tabindex="-1">message <a class="header-anchor" href="#message-3" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="verifyresult" tabindex="-1">verifyResult <a class="header-anchor" href="#verifyresult" aria-label="Permalink to &quot;verifyResult&quot;">​</a></h5><p>数据是否一致。</p><pre><code>private boolean verifyResult{ set; get; }
</code></pre><h3 id="fileversionsfetchstatus" tabindex="-1">FileVersionsFetchStatus <a class="header-anchor" href="#fileversionsfetchstatus" aria-label="Permalink to &quot;FileVersionsFetchStatus&quot;">​</a></h3><p>链上文件版本信息查询事件回调对象。</p><h4 id="属性-26" tabindex="-1">属性 <a class="header-anchor" href="#属性-26" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-4" tabindex="-1">status <a class="header-anchor" href="#status-4" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>文件版本列表获取的处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th></tr></thead><tbody><tr><td>FetchSuccess</td><td>文件版本列表获取成功。</td></tr><tr><td>FetchFailure</td><td>文件版本列表获取失败。</td></tr></tbody></table><h5 id="errorcode-4" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-4" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-4" tabindex="-1">message <a class="header-anchor" href="#message-4" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="versions" tabindex="-1">versions <a class="header-anchor" href="#versions" aria-label="Permalink to &quot;versions&quot;">​</a></h5><p>链上文件版本数据。</p><pre><code>public List\\&lt;FileVersionInfo\\&gt; versions{ set; get; }
</code></pre><ul><li>FileVersionInfo</li></ul><p>链上存储文件版本信息。</p><ul><li><p>属性</p><ul><li>versionID</li></ul></li></ul><p>文件在链上唯一版本ID。</p><pre><code>private String versionID{ set; get; }
</code></pre><ul><li>timestamp</li></ul><p>文件上链保存时间戳。</p><pre><code>private long timestamp{ set; get; }
</code></pre><h3 id="filerightsfetchstatus" tabindex="-1">FileRightsFetchStatus <a class="header-anchor" href="#filerightsfetchstatus" aria-label="Permalink to &quot;FileRightsFetchStatus&quot;">​</a></h3><p>获取链上文件权限列表。</p><h4 id="属性-27" tabindex="-1">属性 <a class="header-anchor" href="#属性-27" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-5" tabindex="-1">status <a class="header-anchor" href="#status-5" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>链上文件权限列表获取的处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th></tr></thead><tbody><tr><td>FetchSuccess</td><td>链上文件权限列表获取成功。</td></tr><tr><td>FetchFailure</td><td>链上文件权限列表获取失败。</td></tr></tbody></table><h5 id="errorcode-5" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-5" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-5" tabindex="-1">message <a class="header-anchor" href="#message-5" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="filerights" tabindex="-1">fileRights <a class="header-anchor" href="#filerights" aria-label="Permalink to &quot;fileRights&quot;">​</a></h5><p>权限信息。</p><pre><code>public RightsInfo fileRights{ set; get; }
</code></pre><ul><li>RightsInfo</li></ul><p>链上文件权限信息。</p><ul><li><p>属性</p><ul><li>owners</li></ul></li></ul><p>文件所有者。</p><pre><code>private List\\&lt;RoleItem\\&gt; owners{ set; get; }
</code></pre><ul><li>sharers</li></ul><p>文件被分享者。</p><pre><code>private List\\&lt;RoleItem\\&gt; sharers{ set; get; }
</code></pre><ul><li>readers</li></ul><p>文件读取者。</p><pre><code>private List\\&lt;RoleItem\\&gt; readers{ set; get; }
</code></pre><ul><li>readersBySharer</li></ul><p>被分享者授权的读取者。</p><pre><code>private List\\&lt;Readers\\&gt; readerIDsBySharer{ set; get; }
</code></pre><ul><li>Readers</li></ul><p>grantorID 授权人ID</p><pre><code>private String grantorID{ set; get; }
</code></pre><p>Readers 读者对象</p><pre><code>private List\\&lt;RoleItem\\&gt; readers{ set; get; }
</code></pre><h3 id="datatxstatus" tabindex="-1">DataTxStatus <a class="header-anchor" href="#datatxstatus" aria-label="Permalink to &quot;DataTxStatus&quot;">​</a></h3><p>链上结构化数据相关交易事件回调对象。</p><h4 id="属性-28" tabindex="-1">属性 <a class="header-anchor" href="#属性-28" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-6" tabindex="-1">status <a class="header-anchor" href="#status-6" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>结构化数据上链操作的当前处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><h5 id="errorcode-6" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-6" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>链上执行失败返回的错误代码。</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-6" tabindex="-1">message <a class="header-anchor" href="#message-6" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>链上执行失败返回的信息</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="txblockdata-1" tabindex="-1">txBlockData <a class="header-anchor" href="#txblockdata-1" aria-label="Permalink to &quot;txBlockData&quot;">​</a></h5><p>链上交易结构化数据。</p><pre><code>public DataTxBlockInfo txBlockData{ set; get; }
</code></pre><ul><li>DataTxBlockInfo</li></ul><p>结构化数据链上信息。</p><ul><li><p>属性</p><ul><li>dataID</li></ul></li></ul><p>结构化数据链上唯一ID。</p><pre><code>private String dataID{ set; get; }
</code></pre><ul><li>versionID</li></ul><p>结构化数据链上版本ID。</p><pre><code>private String versionID{ set; get; }
</code></pre><ul><li>txHash</li></ul><p>上链交易对应的Hash</p><pre><code>private String txHash{ set; get; }
</code></pre><ul><li>txExecTimestamp</li></ul><p>上链交易被执行的时间</p><pre><code>private String txExecTimestamp{ set; get; }
</code></pre><ul><li>blockHash</li></ul><p>交易所在区块hash。</p><pre><code>private String blockHash{ set; get; }
</code></pre><ul><li>blockHeight</li></ul><p>上链交易所在区块高度。</p><pre><code>private long blockHeight{ set; get; }
</code></pre><ul><li>blockedTimestamp</li></ul><p>上链交易所在区块的生成时间戳</p><pre><code>private long currentBlockHeight{ set; get; }
</code></pre><ul><li>currentBlockHeight</li></ul><p>区块链当前区块高度</p><pre><code>private long currentBlockHeight{ set; get; }
</code></pre><h3 id="datafetchstatus" tabindex="-1">DataFetchStatus <a class="header-anchor" href="#datafetchstatus" aria-label="Permalink to &quot;DataFetchStatus&quot;">​</a></h3><p>链上结构化数据查询事件回调对象。</p><h4 id="属性-29" tabindex="-1">属性 <a class="header-anchor" href="#属性-29" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-7" tabindex="-1">status <a class="header-anchor" href="#status-7" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>结构数据获取的处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th></tr></thead><tbody><tr><td>FetchSuccess</td><td>结构数据获取成功。</td></tr><tr><td>FetchFailure</td><td>结构数据获取失败。</td></tr></tbody></table><h5 id="errorcode-7" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-7" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-7" tabindex="-1">message <a class="header-anchor" href="#message-7" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="data" tabindex="-1">data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;data&quot;">​</a></h5><p>链上结构化数据。</p><pre><code>public StructData data{ set; get; }
</code></pre><ul><li>StructData</li></ul><p>链上存储结构化信息。</p><ul><li><p>属性</p><ul><li>dataID</li></ul></li></ul><p>结构化数据链上唯一ID。</p><pre><code>private String dataID{ set; get; }
</code></pre><ul><li>versionID</li></ul><p>结构化数据链上版本ID。</p><pre><code>private String versionID{ set; get; }
</code></pre><ul><li>dataContent</li></ul><p>结构化数据体。</p><pre><code>private String dataContent{ set; get; }
</code></pre><ul><li>dataProperty</li></ul><p>结构化数据附属属性。</p><pre><code>private String dataProperty{ set; get; }
</code></pre><ul><li>dataDigest</li></ul><p>结构化数据本体指纹。</p><pre><code>private String dataDigest{ set; get; }
</code></pre><ul><li>delStatus</li></ul><p>结构化数据删除状态 1=删除；0=有效。</p><pre><code>private int delStatus{ set; get; }
</code></pre><ul><li>uploadTime</li></ul><p>结构化数据上链保持时间戳。</p><pre><code>private long uploadTime{ set; get; }
</code></pre><h3 id="datadigestcheckstatus" tabindex="-1">DataDigestCheckStatus <a class="header-anchor" href="#datadigestcheckstatus" aria-label="Permalink to &quot;DataDigestCheckStatus&quot;">​</a></h3><p>结构化数据指纹与链上数据指纹一致性校验。</p><h4 id="属性-30" tabindex="-1">属性 <a class="header-anchor" href="#属性-30" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-8" tabindex="-1">status <a class="header-anchor" href="#status-8" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>指纹特征值获取的处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th></tr></thead><tbody><tr><td>FetchSuccess</td><td>数据指纹特征值获取成功。</td></tr><tr><td>FetchFailure</td><td>数据指纹特征值获取失败。</td></tr></tbody></table><h5 id="errorcode-8" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-8" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-8" tabindex="-1">message <a class="header-anchor" href="#message-8" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="verifyresult-1" tabindex="-1">verifyResult <a class="header-anchor" href="#verifyresult-1" aria-label="Permalink to &quot;verifyResult&quot;">​</a></h5><p>数据是否一致。</p><pre><code>private boolean verifyResult{ set; get; }
</code></pre><h3 id="dataversionsfetchstatus" tabindex="-1">DataVersionsFetchStatus <a class="header-anchor" href="#dataversionsfetchstatus" aria-label="Permalink to &quot;DataVersionsFetchStatus&quot;">​</a></h3><p>链上结构化数据版本信息查询事件回调对象。</p><h4 id="属性-31" tabindex="-1">属性 <a class="header-anchor" href="#属性-31" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-9" tabindex="-1">status <a class="header-anchor" href="#status-9" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>数据版本列表获取的处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th></tr></thead><tbody><tr><td>FetchSuccess</td><td>数据版本列表获取成功。</td></tr><tr><td>FetchFailure</td><td>数据版本列表获取失败。</td></tr></tbody></table><h5 id="errorcode-9" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-9" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-9" tabindex="-1">message <a class="header-anchor" href="#message-9" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="versions-1" tabindex="-1">versions <a class="header-anchor" href="#versions-1" aria-label="Permalink to &quot;versions&quot;">​</a></h5><p>链上结构化版本数据。</p><pre><code>public List\\&lt;DataVersionInfo\\&gt; versions{ set; get; }
</code></pre><ul><li>DataVersionInfo</li></ul><p>链上存储结构化数据版本信息。</p><ul><li><p>属性</p><ul><li>versionID</li></ul></li></ul><p>结构化数据链上唯一版本ID。</p><pre><code>private String versionID{ set; get; }
</code></pre><ul><li>timestamp</li></ul><p>结构化数据上链保存时间戳。</p><pre><code>private long timestamp{ set; get; }
</code></pre><h3 id="datarightsfetchstatus" tabindex="-1">DataRightsFetchStatus <a class="header-anchor" href="#datarightsfetchstatus" aria-label="Permalink to &quot;DataRightsFetchStatus&quot;">​</a></h3><p>获取链上结构化数据权限列表。</p><h4 id="属性-32" tabindex="-1">属性 <a class="header-anchor" href="#属性-32" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-10" tabindex="-1">status <a class="header-anchor" href="#status-10" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>链上结构数据权限列表获取的处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th></tr></thead><tbody><tr><td>FetchSuccess</td><td>链上结构数据权限列表获取成功。</td></tr><tr><td>FetchFailure</td><td>链上结构数据权限列表获取失败。</td></tr></tbody></table><h5 id="errorcode-10" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-10" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-10" tabindex="-1">message <a class="header-anchor" href="#message-10" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="datarights" tabindex="-1">dataRights <a class="header-anchor" href="#datarights" aria-label="Permalink to &quot;dataRights&quot;">​</a></h5><p>权限信息。</p><pre><code>public RightsInfo dataRights{ set; get; }
</code></pre><ul><li>RightsInfo</li></ul><p>链上结构化数据权限信息。</p><ul><li><p>属性</p><ul><li>ownerIDs</li></ul></li></ul><p>结构数据所有者。</p><pre><code>private List\\&lt;String\\&gt; ownerIDs{ set; get; }
</code></pre><ul><li>sharerIDs</li></ul><p>结构数据被分享者。</p><pre><code>private List\\&lt;String\\&gt; sharerIDs{ set; get; }
</code></pre><ul><li>readerIDs</li></ul><p>结构数据读者。</p><pre><code>private List\\&lt;String\\&gt; readerIDs{ set; get; }
</code></pre><ul><li>readerIDsBySharer</li></ul><p>被分享者授权的读取者。</p><pre><code>private List\\&lt;Readers\\&gt; readerIDsBySharer{ set; get; }
</code></pre><ul><li>Readers</li></ul><p>grantorID 授权人ID</p><pre><code>private String grantorID{ set; get; }
</code></pre><p>ReaderIDs 读取者ID</p><pre><code>private List\\&lt;String\\&gt; readerIDs{ set; get; }
</code></pre><h3 id="contractcallstatus" tabindex="-1">ContractCallStatus <a class="header-anchor" href="#contractcallstatus" aria-label="Permalink to &quot;ContractCallStatus&quot;">​</a></h3><p>链上合约信信息对象。合约事件回调对象。</p><h4 id="属性-33" tabindex="-1">属性 <a class="header-anchor" href="#属性-33" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="status-11" tabindex="-1">status <a class="header-anchor" href="#status-11" aria-label="Permalink to &quot;status&quot;">​</a></h5><p>合约调用的处理状态编码。</p><pre><code>public String status { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>描述</th></tr></thead><tbody><tr><td>FetchSuccess</td><td>合约调用执行成功。</td></tr><tr><td>FetchFailure</td><td>合约调用执行失败。</td></tr></tbody></table><h5 id="errorcode-11" tabindex="-1">errorCode <a class="header-anchor" href="#errorcode-11" aria-label="Permalink to &quot;errorCode&quot;">​</a></h5><p>错误码编号（具体请查看错误码详情）</p><pre><code>private int errorCode{ set; get; }
</code></pre><h5 id="message-11" tabindex="-1">message <a class="header-anchor" href="#message-11" aria-label="Permalink to &quot;message&quot;">​</a></h5><p>错误码对应错误解释。</p><pre><code>private String message{ set; get; }
</code></pre><h5 id="schexreturndata" tabindex="-1">scHexReturnData <a class="header-anchor" href="#schexreturndata" aria-label="Permalink to &quot;scHexReturnData&quot;">​</a></h5><p>链上合约调用结果。</p><pre><code>public ContractTxInfo scHexReturnData{ set; get; }
</code></pre><ul><li>ContractTxInfo</li></ul><p>链上合约信息。</p><ul><li><p>属性</p><ul><li>txhash</li></ul></li></ul><p>上链交易对应的Hash。</p><pre><code>private String txHash{ set; get; }
</code></pre><ul><li>txExecTimestamp</li></ul><p>上链交易被执行的时间。</p><pre><code>private long txExecTimestamp{ set; get; }
</code></pre><ul><li>scResult</li></ul><p>合约调用成功后的返回结构数据，返回结构遵循合约定义。</p><pre><code>private String scResult{ set; get; }
</code></pre><h5 id="sctxblockinfotxblockdata" tabindex="-1">scTxBlockInfoTxBlockData <a class="header-anchor" href="#sctxblockinfotxblockdata" aria-label="Permalink to &quot;scTxBlockInfoTxBlockData&quot;">​</a></h5><p>链上合约相关交易块信息。</p><pre><code>public TxBlockData scTxBlockInfoTxBlockData{ set; get; }
</code></pre><ul><li>TxBlockData</li></ul><p>链上合约相关交易块儿信息。</p><ul><li><p>属性</p><ul><li>blockHash</li></ul></li></ul><p>上链交易所在区块的hash。</p><pre><code>private String blockHash{ set; get; }
</code></pre><ul><li>currentBlockHeight</li></ul><p>区块链当前区块高度。</p><pre><code>private long currentBlockHeight{ set; get; }
</code></pre><ul><li>blockedTimestamp</li></ul><p>上链交易所在区块的生成时间戳</p><pre><code>private long currentBlockHeight{ set; get; }
</code></pre><ul><li>blockHeight</li></ul><p>上链交易所在区块高度。</p><pre><code>private long blockHeight{ set; get; }
</code></pre><h2 id="com-coolawchain-sdk-exceptions" tabindex="-1">com.coolawchain.sdk.exceptions <a class="header-anchor" href="#com-coolawchain-sdk-exceptions" aria-label="Permalink to &quot;com.coolawchain.sdk.exceptions&quot;">​</a></h2><h3 id="httpcodeerrorexception" tabindex="-1">HttpCodeErrorException <a class="header-anchor" href="#httpcodeerrorexception" aria-label="Permalink to &quot;HttpCodeErrorException&quot;">​</a></h3><p>包含链上数据获取返回http状态码不为200。</p><h4 id="属性-34" tabindex="-1">属性 <a class="header-anchor" href="#属性-34" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;code&quot;">​</a></h5><p>返回的异常信息。</p><pre><code>public int code { set; get; }
</code></pre><h3 id="fetchexception" tabindex="-1">FetchException <a class="header-anchor" href="#fetchexception" aria-label="Permalink to &quot;FetchException&quot;">​</a></h3><p>包含链上数据获取异常信息的对象。</p><h4 id="属性-35" tabindex="-1">属性 <a class="header-anchor" href="#属性-35" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="exc" tabindex="-1">exc <a class="header-anchor" href="#exc" aria-label="Permalink to &quot;exc&quot;">​</a></h5><p>返回的异常信息。</p><pre><code>public Exception exc { set; get; }
</code></pre><h3 id="txexception" tabindex="-1">TxException <a class="header-anchor" href="#txexception" aria-label="Permalink to &quot;TxException&quot;">​</a></h3><p>包含上链交易处理异常信息的对象。</p><h4 id="属性-36" tabindex="-1">属性 <a class="header-anchor" href="#属性-36" aria-label="Permalink to &quot;属性&quot;">​</a></h4><h5 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-label="Permalink to &quot;state&quot;">​</a></h5><p>上链交易操作中出现异常状态编码。</p><pre><code>public String state { set; get; }
</code></pre><p>状态编码列表：</p><table><thead><tr><th>状态取值</th><th>含义描述</th></tr></thead><tbody><tr><td>TxSendSuccess</td><td>上链交易发送成功。</td></tr><tr><td>TxSendFailure</td><td>上链交易发送失败。</td></tr><tr><td>TxExecSuccess</td><td>上链交易执行成功。</td></tr><tr><td>TxExecFailure</td><td>上链交易执行失败。</td></tr><tr><td>TxBlockConfirm</td><td>上链交易落块确认。</td></tr><tr><td>TxBlkCfmFailure</td><td>上链交易落块确认失败。</td></tr><tr><td>UploadAccomplish</td><td>文件成功上链保存。</td></tr><tr><td>UploadFailure</td><td>文件上链保存失败。</td></tr></tbody></table><h5 id="exc-1" tabindex="-1">exc <a class="header-anchor" href="#exc-1" aria-label="Permalink to &quot;exc&quot;">​</a></h5><p>返回的异常信息。</p><pre><code>public Exception exc { set; get; }
</code></pre><h2 id="com-coolawchain-sdk-utils" tabindex="-1">com.coolawchain.sdk.utils <a class="header-anchor" href="#com-coolawchain-sdk-utils" aria-label="Permalink to &quot;com.coolawchain.sdk.utils&quot;">​</a></h2><h3 id="cryptoutil" tabindex="-1">CryptoUtil <a class="header-anchor" href="#cryptoutil" aria-label="Permalink to &quot;CryptoUtil&quot;">​</a></h3><p>数字身份信息加解密、签名等相关方法。</p><h4 id="hexstrtobytes" tabindex="-1">hexStrToBytes <a class="header-anchor" href="#hexstrtobytes" aria-label="Permalink to &quot;hexStrToBytes&quot;">​</a></h4><p>将十六进制字符转换为字节数组。</p><pre><code>public byte[] hexStrToBytes(String hexStr);
</code></pre><p><strong>示例：</strong></p><pre><code>String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
byte[] byteOwner = CryptoUtil.crypto.hexStrToBytes(ownerPrivateKey);
</code></pre><h4 id="genaccountkey" tabindex="-1">genAccountKey <a class="header-anchor" href="#genaccountkey" aria-label="Permalink to &quot;genAccountKey&quot;">​</a></h4><p>根据私钥（十六进制）生成数字身份信息，包含对应的数字身份标识、公钥。</p><pre><code>public static KeyPairs genAccountKey (String privateKey);
</code></pre><p><strong>示例：</strong></p><pre><code>String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;
KeyPairs owner = CryptoUtil.crypto.genAccountKey(ownerPrivateKey );
</code></pre><h4 id="signature" tabindex="-1">signature <a class="header-anchor" href="#signature" aria-label="Permalink to &quot;signature&quot;">​</a></h4><p>使用私钥对数据进行签名并生成签名结果。</p><pre><code>public static String signature (String privateKey,String content);
</code></pre><p><strong>参数</strong></p><p>content String</p><p>要进行签名的数据内容。</p><p>privateKey String</p><p>用于签名的私钥。</p><p><strong>返回</strong></p><p>String</p><p>生成的签名结果。</p><p><strong>示例：</strong></p><pre><code>String ownerPrivateKey = &quot;3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d&quot;;

String signResult = CryptoUtil.crypto.signature(ownerPrivateKey,&quot;要进行签名的内容&quot;);
</code></pre><h3 id="sm4util" tabindex="-1">SM4Util <a class="header-anchor" href="#sm4util" aria-label="Permalink to &quot;SM4Util&quot;">​</a></h3><p>提供国密SM4相关的方法。</p><h4 id="generatekey" tabindex="-1">generateKey <a class="header-anchor" href="#generatekey" aria-label="Permalink to &quot;generateKey&quot;">​</a></h4><p>随机生成一个对称密钥。</p><pre><code>public static String generateKey();
</code></pre><p><strong>返回</strong></p><p>String</p><p>生成的对称密钥。</p><p><strong>示例：</strong></p><pre><code>String key = SM4Util.generateKey();
</code></pre><h4 id="encrypt" tabindex="-1">encrypt <a class="header-anchor" href="#encrypt" aria-label="Permalink to &quot;encrypt&quot;">​</a></h4><p>使用对称密钥对原文进行加密。</p><pre><code>public static byte[] encrypt(byte[] data,String key);
</code></pre><p><strong>参数</strong></p><p>data byte[]</p><p>需要加密的原文数据。</p><p>key String</p><p>对称密钥。</p><p><strong>返回</strong></p><p>byte[]</p><p>加密后的密文。</p><p><strong>示例：</strong></p><pre><code>String key = &quot;对称密钥&quot;;
byte[] encData = encrypt(&quot;你好&quot;.getBytes(),key);
</code></pre><h4 id="decrypt" tabindex="-1">decrypt <a class="header-anchor" href="#decrypt" aria-label="Permalink to &quot;decrypt&quot;">​</a></h4><p>使用对称密钥对密文数据进行解密。</p><pre><code>public static byte[] decrypt(byte[] data, String key);
</code></pre><p><strong>参数</strong></p><p>data byte[]</p><p>需要解密的密文数据。</p><p>key String</p><p>对称密钥。</p><p><strong>返回</strong></p><p>byte[]</p><p>解密后的原文。</p><p><strong>示例：</strong></p><pre><code>byte[] encData = new byte[0];
String key = &quot;对称密钥&quot;;
byte[] decDatas = decrypt(encData,key);
</code></pre>`,1253),s=[i,c,l,p,d];function u(h,b,x,q,f,m){return a(),r("div",null,s)}const g=o(n,[["render",u]]);export{F as __pageData,g as default};
