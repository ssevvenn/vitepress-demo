import{_ as t}from"./chunks/17731d3949f58e97eac8d5a844e0b72e.ee7aa54b.js";import{_ as o,o as n,c as e,O as a}from"./chunks/framework.66cc414a.js";const i="/vitepress-demo/4d5516abc8a1007c42faf95176cf770f.png",l="/vitepress-demo/e12ba4af993998183e24057bc31acbdf.png",u="/vitepress-demo/247518f8a66c03bd8c54817a7f28aaca.png",r="/vitepress-demo/4e9dcbdf535f9f7baf780386414774f0.png",h=JSON.parse('{"title":"链上操作","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/chapter-6/index.md","filePath":"markdown/chapter-6/index.md"}'),c={name:"markdown/chapter-6/index.md"},s=a('<h1 id="链上操作" tabindex="-1">链上操作 <a class="header-anchor" href="#链上操作" aria-label="Permalink to &quot;链上操作&quot;">​</a></h1><h2 id="调用前置条件" tabindex="-1">调用前置条件 <a class="header-anchor" href="#调用前置条件" aria-label="Permalink to &quot;调用前置条件&quot;">​</a></h2><ul><li>链外应用系统调用的前置节点服务器必须获得从法链的访问准入许可授权。</li><li>链外应用系统身份标识必须获得要访问的链上业务域的访问准入许可授权。</li></ul><h2 id="文件操作" tabindex="-1">文件操作 <a class="header-anchor" href="#文件操作" aria-label="Permalink to &quot;文件操作&quot;">​</a></h2><p>从法链提供非结构化文件上链保存及链上全生命周期管理，从而利用区块链的防篡改、防灭失等技术特性，实现文件的长久保真。从法链特有之处在于通过碎密随机分布、容量智能分片、时空证明、零知识证明等技术，真正意义的将文件本体保存于区块链中，并实现链上文件的防篡改、防灭失、长久保真。</p><p>链外应用系统通过调用前置节点服务器上的一系列文件链上操作接口，实现文件的上链保存、可信共享、删除、版本追溯、文件验真等功能。</p><p>文件保存于从法链特定业务域中，并被从法链利用碎密随机分布、权限控制、访问准入等技术手段进行全方位隐私保护，从而确保链上文件的安全性。只有获得合法权限方可被区块链引擎允许对相应的链上保存的文件进行相应的链上操作。换句话说，虽然文件被加密、分片、随机保存在从法链的各个节点服务器上，但任何人在未获得授权的情况下，均无法获取链上保存的文件本体和元数据的真实内容，即使通过节点服务器存储进行强行获取。</p><p>*<strong>链上数据结构</strong></p><p><img src="'+i+`" alt=""></p><ul><li>文件本体：用于保存文件具体内容。链上保存的文件本体利用碎密随机分布、容量智能分片、时空证明、零知识证明等技术，分散保存于从法链节点网络中；文件单体尺寸上限为500MB；文件本体内容被从法链加密保存。 <ul><li>文件描述（可选）：从法链提供的文件元数据的一部分，用于对文件的用途和作用做出描述。文件描述的尺寸上限为1KB；文件描述内容被从法链加密保存。</li><li>附属属性（可选）：从法链提供的文件元数据的一部分，用于描述文件的特征属性。附属属性以字符串类型在链上进行保存，建议用JSON/XML格式构建，并序列化成字符串；附属属性单体尺寸上限为1MB；附属属性内容被从法链加密保存。</li><li>文件名：从法链提供的文件元数据的一部分，用于记录文件的名称。文件名以字符串类型在链上进行明文保存。</li><li>文件类型：从法链提供的文件元数据的一部分，用于记录文件的文件类型（如：DOC、PDF、MP4等）。文件类型以字符串类型在链上进行明文保存。</li><li>文件尺寸：从法链提供的文件元数据的一部分，用于记录文件本体的尺寸。文件尺寸以整数类型在链上进行明文保存，单位为byte。</li><li>文件Hash：从法链提供的文件元数据的一部分，用于记录文件本体的Hash值，即文件的指纹特征值。文件Hash以字符串类型在链上进行明文保存。</li><li>文件所有者：记录文件所有者数字身份标识。文件拥有者拥有对文件的完整控制权：管理哪些数字身份标识可以读取文件本体和文件元数据内容；对文件本体和文件元数据内容进行版本更新；对文件进行删除；对文件进行追溯；文件验真等。文件所有者有权添加和删除文件分享者列表和文件读取者列表中的数字身份标识；当删除特定的分享者时，此共分享者所有授权的读取者应该一并被删除；如果某个数字身份标识同时被多人（所有者/分享者）授权拥有读取权限，则只有所有授权人将相应的读取权限删除，否则此数字身份标识会继续拥有读取权限。文件所有者数字身份标识以字符串类型在链上进行明文保存。</li><li>文件分享者列表：记录所有拥有文件分享权限的数字身份标识名单。在文件分享者列表中的数字身份可以进行如下操作：向文件读取者列表中添加/删除数字身份标识的权利（只能删除自己授权的数字身份标识）；读取文件本体和文件元数据内容；对文件进行追溯；文件验真等。文件分享者列表中数字身份标识以字符串类型在链上进行明文保存。</li><li>文件读取者列表：记录所有拥有获取文件权限的数字身份标识名单。在文件读取者列表中的数字身份可以进行如下操作：读取文件本体和文件元数据内容；对文件进行追溯；文件验真等。文件读取者列表中数字身份标识以字符串类型在链上进行明文保存。</li><li>文件链上ID：记录文件的链上唯一标识，当使用此ID进行文件获取时，从法链会将最新版本的文件本体和文件元数据内容返回给调用者。文件链上ID以字符串类型在链上进行明文保存。</li><li>文件当前版本ID：记录文件当前版本的唯一标识，便于快速定位特定版本的文件本体和文件元数据内容。文件当前版本ID以字符串类型在链上进行明文保存。</li><li>当前版本提交时间戳：记录当前版本文件提交上链保存的时间。即通过调用前置节点上链交易提交接口，提交文件上链保存请求的时间。当前版本提交时间戳在链上明文保存。</li><li>文件历史版本ID列表：记录文件所有版本的唯一标识，便于依据特定历史版本ID进行文件相应版本的历史信息获取。文件历史版本ID以字符串类型在链上进行明文保存。</li><li>隶属业务域ID：记录文件所在业务域的身份标识。只有获得隶属业务域访问准入许可授权，方可接触此文件，但有没有文件操作能力，还需拥有文件的相应操作权限。</li></ul></li></ul><h3 id="文件保存" tabindex="-1">文件保存 <a class="header-anchor" href="#文件保存" aria-label="Permalink to &quot;文件保存&quot;">​</a></h3><p>将非结构化文件提交上链并保存于特定的链上业务域中。</p><p>*<strong>Java调用示例</strong></p><pre><code>log.debug(&quot;file start&quot;);
CountDownLatch countDownLatch = new CountDownLatch(1);
final FileTxStatus[] status = {null};
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL);
FileUpload fileUpload = new FileUpload(frontend, Config.BUSINESS_DOMAIN_ID) {
    @Override
    public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件上链交易发送成功，等待区块链执行处理。
        log.info(&quot;1 发送交易成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件上链交易发送失败。
        log.info(&quot;1 发送交易失败:{}&quot;);
        countDownLatch.countDown();
    }

    @Override
    public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件上链交易执行成功，文件元数据上链保存，等待落块确认。
        //此时文件本体仍在上链处理中。

        log.info(&quot;2 确认落块成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件上链交易执行失败，文件元数据和文件本体均未上链保存。
        log.info(&quot;2 确认落块失败:{}&quot;);
        countDownLatch.countDown();
    }

    @Override
    public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
        FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
        log.info(&quot;文件ID&quot;+txBlockData.getFileID());
        log.info(&quot;文件版本ID&quot;+txBlockData.getVersionID());
        log.info(&quot;交易hash&quot;+txBlockData.getTxHash());
        log.info(&quot;交易上链时间&quot;+txBlockData.getTxExecTimestamp());
        log.info(&quot;交易块儿hash&quot;+txBlockData.getBlockHash());
        log.info(&quot;交易落块儿时间&quot;+txBlockData.getBlockedTimestamp());
        log.info(&quot;交易块儿高度&quot;+txBlockData.getBlockHeight());
        log.info(&quot;当前链最高块儿&quot;+txBlockData.getCurrentBlockHeight());
        //事件触发条件：在文件上链操作处理彻底完成，文件元数据和文件本体均成功上链保存
        log.info(&quot;4 文件上链成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
        status[0] =fUplStatus;
        countDownLatch.countDown();
    }

    @Override
    public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件本体上链保存因超过重复尝试次数而超时失败，文件上链交易请求需重新提交。
        log.info(&quot;4 文件上链失败:{}&quot;,fUplStatus);
        countDownLatch.countDown();
    }

    @Override
    public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件元数据成功上链保存，并获得落块确认。
        log.info(&quot;3  12块儿确认成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件上链交易落块确认失败，上链保存的文件元数据被链回滚。
        //事件触发后，会返回错误信息。文件上链交易请求需重新提交。

        log.info(&quot;3  12块儿确认失败:{}&quot;,fUplStatus);
        countDownLatch.countDown();
    }

    @Override
    public void onError(TxException e, Object context) {
        //事件触发条件：FileUpload调用出现异常。并返回异常信息。
        log.info(&quot;失败:{}&quot;,e);
    }


};

String path =&quot;/Users/pan/Desktop/testv/未命名2.rtf.zip&quot;;
fileUpload.setFile(new File(path));
//文件副本数量
fileUpload.setFileCopy(1);
//文件分片数量
fileUpload.setFileSlice(1);
fileUpload.setFileName(fileUpload.getFile().getName());
//文件描述
fileUpload.setFileDescription(&quot;Description&quot;);
//文件附属属性信息（json或xml）
fileUpload.setFileProperty(&quot;Property&quot;);

//Config.OWNER_ADDRESS  --赋值提交上链交易的文件所有者数字身份标识（即文件所有者列表中的其中一个）
//Config.MANAGER_ADDRESS  --赋值文件所有者数字身份标识
String[] ownersArray={Config.OWNER_ADDRESS,Config.MANAGER_ADDRESS};
String[] readersArray={Config.OWNER_ADDRESS,Config.MANAGER_ADDRESS};
String[] sharersArray={Config.OWNER_ADDRESS,Config.MANAGER_ADDRESS};
//授权
fileUpload.setOwners(ownersArray);
fileUpload.setReaders(readersArray);
fileUpload.setSharers(sharersArray);
//文件上链
//Config.OWNER_PRIVATE_KEY  --用户私钥
fileUpload.submit(Config.OWNER_PRIVATE_KEY);
countDownLatch.await(5, TimeUnit.MINUTES);Assertions.assertEquals(1, status[0].getErrorCode());
log.debug(&quot;file end&quot;);
</code></pre><h3 id="文件元数据更新" tabindex="-1">文件元数据更新 <a class="header-anchor" href="#文件元数据更新" aria-label="Permalink to &quot;文件元数据更新&quot;">​</a></h3><p>对特定的链上业务域中的文件进行元数据更新。</p><p>*<strong>Java调用示例</strong></p><pre><code>CountDownLatch countDownLatch = new CountDownLatch(1);
final FileTxStatus[] status = {null};
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
FileMetaUpate fileMetaUpate = new FileMetaUpate(frontend,Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
        log.info(&quot;1 发送交易成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
        countDownLatch.countDown();
        log.info(&quot;onTxSendFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
        log.info(&quot;2 确认落块成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
        countDownLatch.countDown();
        log.info(&quot;onTxExecFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
        FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
        log.info(&quot;文件ID&quot;+txBlockData.getFileID());
        log.info(&quot;文件版本ID&quot;+txBlockData.getVersionID());
        log.info(&quot;交易hash&quot;+txBlockData.getTxHash());
        log.info(&quot;交易上链时间&quot;+txBlockData.getTxExecTimestamp());
        log.info(&quot;交易块儿hash&quot;+txBlockData.getBlockHash());
        log.info(&quot;交易落块儿时间&quot;+txBlockData.getBlockedTimestamp());
        log.info(&quot;交易块儿高度&quot;+txBlockData.getBlockHeight());
        log.info(&quot;当前链最高块儿&quot;+txBlockData.getCurrentBlockHeight());
        //事件触发条件：在文件上链操作处理彻底完成，文件元数据和文件本体均成功上链保存
        log.info(&quot;4 文件上链成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
        status[0] =fUplStatus;
        countDownLatch.countDown();
    }

    @Override
    public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
        countDownLatch.countDown();
        log.info(&quot;onUploadFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件元数据上链更新成功，并获得落块确认。
        log.info(&quot;4  12块儿确认成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件元数据更新上链交易落块确认失败，上链更新的文件元数据被链回滚。
        //事件触发后，会返回错误信息。文件元数据更新上链交易请求需重新提交。

        countDownLatch.countDown();
        log.info(&quot;onTxBlockCfmFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onError(TxException e, Object context) {
        countDownLatch.countDown();
        log.info(&quot;异常，[{}]&quot;,e);
    }
};
//fileId 文件id
String fileId=&quot;b568ef0ea7ddf3cb605f8e937f0cb803aef34ec4&quot;;
fileMetaUpate.setFileID(fileId);
//Config.OWNER_ADDRESS  --用户私钥地址
fileMetaUpate.setOwnerID(Config.OWNER_ADDRESS);
fileMetaUpate.setFileName(&quot;我修改的文件名&quot;);
fileMetaUpate.setFileDescription(&quot;我修改的文件描述&quot;);
fileMetaUpate.setFileProperty(&quot;我修改的附属属性&quot;);
//Config.OWNER_PRIVATE_KEY   --用户私钥
fileMetaUpate.submit(Config.OWNER_PRIVATE_KEY);
countDownLatch.await();
Assertions.assertEquals(1, status[0].getErrorCode());
</code></pre><h3 id="文件本体更新" tabindex="-1">文件本体更新 <a class="header-anchor" href="#文件本体更新" aria-label="Permalink to &quot;文件本体更新&quot;">​</a></h3><p>对特定的链上业务域中的文件的本体进行更新。</p><p>*<strong>Java调用示例</strong></p><pre><code>CountDownLatch cdl = new CountDownLatch(1);
final FileTxStatus[] status = {null};
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
FileModify fileModify = new FileModify(frontend,Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件更新上链交易发送成功，等待区块链执行处理。
        log.info(&quot;1 发送交易成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件更新上链交易发送失败。
        //事件触发后，会返回错误信息。

        log.info(&quot;1 发送交易失败:{}&quot;,fUplStatus);
        cdl.countDown();
    }

    @Override
    public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件更新上链交易执行成功，更新的文件元数据上链保存，等待落块确认。
        //此时文件本体仍在上链处理中。

        log.info(&quot;2 确认落块成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件更新上链交易执行失败，更新的文件元数据和文件本体均未上链保存。
        //事件触发后，会返回错误信息。文件更新上链交易请求需重新提交。
        log.info(&quot;2 确认落块失败:{}&quot;,fUplStatus);
        cdl.countDown();
    }

    @Override
    public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
        FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
        log.info(&quot;文件ID&quot;+txBlockData.getFileID());
        log.info(&quot;文件版本ID&quot;+txBlockData.getVersionID());
        log.info(&quot;交易hash&quot;+txBlockData.getTxHash());
        log.info(&quot;交易上链时间&quot;+txBlockData.getTxExecTimestamp());
        log.info(&quot;交易块儿hash&quot;+txBlockData.getBlockHash());
        log.info(&quot;交易落块儿时间&quot;+txBlockData.getBlockedTimestamp());
        log.info(&quot;交易块儿高度&quot;+txBlockData.getBlockHeight());
        log.info(&quot;当前链最高块儿&quot;+txBlockData.getCurrentBlockHeight());
        //事件触发条件：在文件上链操作处理彻底完成，文件元数据和文件本体均成功上链保存
        //事件触发条件：在文件更新操作处理彻底完成，更新的文件元数据和文件本体均成功上链保存。
        status[0] =fUplStatus;
        cdl.countDown();
    }

    @Override
    public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件本体上链保存因超过重复尝试次数而超时失败，文件更新上链交易请求需重新提交。
        log.info(&quot;3 文件上链失败:{}&quot;,fUplStatus);
    }

    @Override
    public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：更新的文件元数据成功上链保存，并获得落块确认。
        //此时文件本体仍在上链处理中。

        log.info(&quot;4  12块儿确认成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件更新上链交易落块确认失败，上链保存的文件元数据被链回滚。
        //事件触发后，会返回错误信息。文件更新上链交易请求需重新提交。

        log.info(&quot;4  12块儿确认失败:{}&quot;,fUplStatus);
        cdl.countDown();
    }

    @Override
    public void onError(TxException e, Object context) {
        //事件触发条件：FileModify调用出现异常。并返回异常信息。
        log.info(&quot;异常，[{}]&quot;,e);
        cdl.countDown();
    }
};
//Config.FILE_PATH  --需要上传的路径
fileModify.setFile(new File(Config.FILE_PATH));
//文件副本数量
fileModify.setFileCopy(3);
//文件分片数量
fileModify.setFileSlice(3);
//文件名称
fileModify.setFileName(fileModify.getFile().getName());
//赋值要更新的文件描述
fileModify.setFileDescription(&quot;123&quot;);
//文件附属属性信息（json或xml）
fileModify.setFileProperty(&quot;123&quot;);
//Config.OWNER_ADDRESS  --用户私钥对应的地址
String[] strArray={Config.OWNER_ADDRESS};
fileModify.setOwners(strArray);
fileModify.setReaders(strArray);
fileModify.setSharers(strArray);
//Config.OWNER_ADDRESS  --用户私钥对应的地址
fileModify.setOwnerID(Config.OWNER_ADDRESS);
//FILEID   --需要更改的链Id
String FILEID=&quot;b568ef0ea7ddf3cb605f8e937f0cb803aef34ec4&quot;;
fileModify.setFileID(FILEID);
//进行文件元数据和本体上链更新操作提交
fileModify.submit(Config.OWNER_PRIVATE_KEY);
cdl.await(5,TimeUnit.MINUTES);
Assertions.assertTrue(status[0].getErrorCode()==1);
</code></pre><h3 id="文件授权" tabindex="-1">文件授权 <a class="header-anchor" href="#文件授权" aria-label="Permalink to &quot;文件授权&quot;">​</a></h3><h4 id="授权" tabindex="-1">授权 <a class="header-anchor" href="#授权" aria-label="Permalink to &quot;授权&quot;">​</a></h4><p>将特定数字身份标识添加至链上业务域中特定文件的读取者/分享者/所有者权限列表中，使其拥有文件的读取/分享/所有者权限。</p><p>拥有读取权限的数字身份可以进行如下操作：读取文件本体和元数据内容；对文件进行追溯；文件验真等。</p><p>拥有分享权限的数字身份可以进行如下操作：向文件读取者列表中添加/删除数字身份标识的权利（只能删除自己授权的数字身份标识）；读取文件本体和元数据内容；对文件进行追溯；文件验真等。</p><p>拥有所有者权限的数字身份可以进行如下操作：读取文件本体和元数据内容；对文件进行追溯；文件验真；文件更新；文件元数据更新；文件授权；文件删除等。</p><p>*<strong>Java调用示例</strong></p><pre><code>CountDownLatch cdl = new CountDownLatch(1);
final FileTxStatus[] status = {null};
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
FileAuthorise fileAuthorise = new FileAuthorise(frontend,Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件授权上链交易发送成功，等待区块链执行处理。
        log.info(&quot;1 发送交易成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        //事件触发条件：文件授权上链交易发送失败。
        //事件触发后，会返回错误信息。

        log.info(&quot;1 发送交易失败&quot;);
    }

    @Override
    public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件授权上链交易执行成功，等待落块确认。
        log.info(&quot;2 确认落块成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        //事件触发条件：文件授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效。
        //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
        log.info(&quot;2 确认落块失败&quot;);
    }

    @Override
    public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：在文件上链操作处理彻底完成，文件授权成功

        log.info(&quot;3 文件上链成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        //文件授权失败
        log.info(&quot;3 文件上链失败&quot;);
    }

    @Override
    public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
        FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
        log.info(&quot;文件ID&quot;+txBlockData.getFileID());
        log.info(&quot;文件版本ID&quot;+txBlockData.getVersionID());
        log.info(&quot;交易hash&quot;+txBlockData.getTxHash());
        log.info(&quot;交易上链时间&quot;+txBlockData.getTxExecTimestamp());
        log.info(&quot;交易块儿hash&quot;+txBlockData.getBlockHash());
        log.info(&quot;交易落块儿时间&quot;+txBlockData.getBlockedTimestamp());
        log.info(&quot;交易块儿高度&quot;+txBlockData.getBlockHeight());
        log.info(&quot;当前链最高块儿&quot;+txBlockData.getCurrentBlockHeight());
        status[0] =fUplStatus;
        cdl.countDown();
        //事件触发条件：文件授权上链交易执行成功，并获得落块确认。
        log.info(&quot;4  12块儿确认成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        //事件触发条件：文件授权上链交易执行失败，上链保存的文件授权被链回滚。
        //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
        log.info(&quot;4  12块儿确认失败&quot;);
    }

    @Override
    public void onError(TxException e, Object context) {
        cdl.countDown();
        //事件触发条件：FileAuthorise调用出现异常。并返回异常信息。
        log.info(&quot;异常，[{}]&quot;,e);
    }
};
// Config.FILE_ID   --文件ID
fileAuthorise.setFileID(Config.FILE_ID);
//Config.OWNER_ADDRESS  --用户私钥对应的地址
fileAuthorise.setGrantorID(Config.OWNER_ADDRESS);
//authorise  --被授权的用户（数组）
String[] authorise={&quot;ce15afb7f07ecd164ce9e581e2bdd1c19c130401&quot;};
//授权
fileAuthorise.addOwners(authorise);
fileAuthorise.setReaderIDs(authorise);
fileAuthorise.setSharerIDs(authorise);
//--赋值提交上链交易的授权者数字身份私钥（此范例使用文件所有者的数字身份标识）
//Config.OWNER_ADDRESS  --用户私钥
fileAuthorise.submit(Config.OWNER_PRIVATE_KEY);
cdl.await();
Assertions.assertTrue(status[0].getErrorCode()==1);
</code></pre><h4 id="取消授权" tabindex="-1">取消授权 <a class="header-anchor" href="#取消授权" aria-label="Permalink to &quot;取消授权&quot;">​</a></h4><p>删除链上业务域中特定文件的读取/分享/所有者权限列表中的特定数字身份标识，使其失去文件的读取/分享/所有者权限。</p><p><img src="`+t+`" alt=""></p><ul><li><p>文件所有者能够删除所有分享者和所有由所有者直接授权的读取者。</p></li><li><p>文件分享者只能删除自己授权的读取者。 *<strong>Java调用示例</strong></p><p>CountDownLatch cdl = new CountDownLatch(1); final FileTxStatus[] status = {null}; // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥 // Config.FRONT_SERVER_URL --前置节点调用接口地址 // Config.BUSINESS_DOMAIN_ID --业务域ID //--创建前置节点对象 Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL); FileAuthorise fileAuthorise = new FileAuthorise(frontend,Config.BUSINESS_DOMAIN_ID) {</p><pre><code>@Override
public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
    //事件触发条件：文件授权上链交易发送成功，等待区块链执行处理。
    log.info(&quot;1 发送交易成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
}

@Override
public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
    cdl.countDown();
    //事件触发条件：文件授权上链交易发送失败。
    //事件触发后，会返回错误信息。

    log.info(&quot;1 发送交易失败&quot;);
}

@Override
public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
    //事件触发条件：文件授权上链交易执行成功，等待落块确认。
    log.info(&quot;2 确认落块成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
}

@Override
public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
    cdl.countDown();
    //事件触发条件：文件授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效。
    //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
    log.info(&quot;2 确认落块失败&quot;);
}

@Override
public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
    //事件触发条件：在文件上链操作处理彻底完成，文件授权成功

    log.info(&quot;3 文件上链成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
}

@Override
public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
    cdl.countDown();
    //文件授权失败
    log.info(&quot;3 文件上链失败&quot;);
}

@Override
public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
    FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
    log.info(&quot;文件ID&quot;+txBlockData.getFileID());
    log.info(&quot;文件版本ID&quot;+txBlockData.getVersionID());
    log.info(&quot;交易hash&quot;+txBlockData.getTxHash());
    log.info(&quot;交易上链时间&quot;+txBlockData.getTxExecTimestamp());
    log.info(&quot;交易块儿hash&quot;+txBlockData.getBlockHash());
    log.info(&quot;交易落块儿时间&quot;+txBlockData.getBlockedTimestamp());
    log.info(&quot;交易块儿高度&quot;+txBlockData.getBlockHeight());
    log.info(&quot;当前链最高块儿&quot;+txBlockData.getCurrentBlockHeight());
    status[0] =fUplStatus;
    cdl.countDown();
    //事件触发条件：文件授权上链交易执行成功，并获得落块确认。
    log.info(&quot;4  12块儿确认成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
}

@Override
public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
    cdl.countDown();
    //事件触发条件：文件授权上链交易执行失败，上链保存的文件授权被链回滚。
    //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
    log.info(&quot;4  12块儿确认失败&quot;);
}

@Override
public void onError(TxException e, Object context) {
    cdl.countDown();
    //事件触发条件：FileAuthorise调用出现异常。并返回异常信息。
    log.info(&quot;异常，[{}]&quot;,e);
}
</code></pre><p>};</p><p>//取消授权 // Config.FILE_ID --文件ID fileAuthorise.setFileID(Config.FILE_ID); //Config.OWNER_ADDRESS --用户私钥对应的地址 fileAuthorise.setGrantorID(Config.OWNER_ADDRESS); //authorise --被取消授权的用户（数组） String[] authorise={&quot;ce15afb7f07ecd164ce9e581e2bdd1c19c130401&quot;}; fileAuthorise.removeReaders(authorise); //Config.OWNER_ADDRESS --用户私钥 fileAuthorise.submit(Config.OWNER_PRIVATE_KEY); cdl.await(); Assertions.assertTrue(status[0].getErrorCode()==1);</p></li></ul><h4 id="权限列表获取" tabindex="-1">权限列表获取 <a class="header-anchor" href="#权限列表获取" aria-label="Permalink to &quot;权限列表获取&quot;">​</a></h4><p>获取链上业务域中特定文件的权限列表信息，包括读取/分享/所有者权限列表。</p><ul><li><p>文件所有者有权获取完整的所有者列表和所有者分别授权的读取者列表；完整的分享者列表和分享者分别授权的读取者列表。</p></li><li><p>文件分享者有权获取自己授权的读取者列表。</p></li><li><p>文件读取者无权获取文件权限列表。 *<strong>Java调用示例</strong></p><p>CountDownLatch cdl = new CountDownLatch(1); final FileRightsFetchStatus[] status = {null}; // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥 // Config.FRONT_SERVER_URL --前置节点调用接口地址 // Config.BUSINESS_DOMAIN_ID --业务域ID //--创建前置节点对象 Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL); FileRightsFetch FileAuthorise = new FileRightsFetch(frontend, Config.BUSINESS_DOMAIN_ID) { @Override public void onSuccess(FileRightsFetchStatus commonStatus, Object context) { status[0] = commonStatus; cdl.countDown();</p><pre><code>    FileRightsFetchStatus.RightsInfo fileRights = commonStatus.getFileRights();
    for (int i = 0; i &lt; fileRights.getOwners().size(); i++) {
        log.info(&quot;结构数据所有者身份标识: &quot; + fileRights.getOwners().get(i));
    }
    //结构数据所有者所授权的分享者列表
    List&lt;FileRightsFetchStatus.Readers&gt; readersBySharer = commonStatus.getFileRights().getReadersBySharer();
    for (int j = 0; j &lt; readersBySharer.size(); j++) {
        log.info(&quot;有授权分享者的结构数据所有者数字身份标识=&quot; + readersBySharer.get(j).getGrantorID());
        for (int n = 0; n &lt; readersBySharer.get(j).getReaders().size(); n++) {
            log.info(&quot;当前结构数据所有者授权的分享者数字身份标识=&quot; + readersBySharer.get(j).getReaders().get(n));
        }
    }
    //事件触发条件：在&quot;文件权限列表获取&quot;链上操作处理彻底完成，文件权限列表信息已成功下载。
    log.info(&quot;onSuccess[{}]&quot;, commonStatus);
}

@Override
public void onFailure(FileRightsFetchStatus commonStatus, Object context) {
    cdl.countDown();
    //事件触发条件：在&quot;文件权限列表获取&quot;链上操作处理失败，文件权限列表信息未被下载。
    log.info(&quot;onSuccess[{}]&quot;, commonStatus);
}

@Override
public void onError(FetchException e, Object context) {
    cdl.countDown();
    //事件触发条件：FileRightsFetch调用出现异常。并返回异常信息。
    log.info(&quot;onSuccess[{}]&quot;, e);
}
</code></pre><p>}; // Config.FILE_ID --文件ID FileAuthorise.setFileID(Config.FILE_ID); //Config.OWNER_ADDRESS --用户私钥 FileAuthorise.query(Config.OWNER_PRIVATE_KEY); cdl.await(); Assertions.assertTrue(status[0].getErrorCode() == 1);</p></li></ul><h3 id="文件元数据获取" tabindex="-1">文件元数据获取 <a class="header-anchor" href="#文件元数据获取" aria-label="Permalink to &quot;文件元数据获取&quot;">​</a></h3><p>从指定的业务域中获取指定文件的指定版本的元数据信息。</p><p>被设置为删除状态的文件元数据是可以被读取到的，只不过状态被标记为删除。</p><p>*<strong>Java调用示例</strong></p><pre><code>CountDownLatch cdl = new CountDownLatch(1);
final FileMetaFetchStatus[] status = {null};
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL);
FileMetaFetch fileFetch = new FileMetaFetch(frontend, Config.BUSINESS_DOMAIN_ID) {


    @Override
    public void onSuccess(FileMetaFetchStatus commonStatus, Object context) {
        FileMetaFetchStatus.FileMeta fileMeta = commonStatus.getFileMeta();
        log.info(&quot;文件链上ID:{}&quot;, fileMeta.getFileID());
        log.info(&quot;文件当前版本ID:{}&quot;, fileMeta.getVersionID());
        log.info(&quot;文件名称:{}&quot;, fileMeta.getFileName());
        log.info(&quot;文件扩展名:{}&quot;, fileMeta.getFileSuffix());
        log.info(&quot;文件尺寸，单位为Byte:{}&quot;, fileMeta.getFileSize());
        log.info(&quot;文件描述:{}&quot;, fileMeta.getFileDescription());
        log.info(&quot;文件附属属性:{}&quot;, fileMeta.getFileProperty());
        log.info(&quot;文件副本数量:{}&quot;, fileMeta.getFileCopy());
        log.info(&quot;文件切片数量:{}&quot;, fileMeta.getFileSlice());
        log.info(&quot;文件本体指纹特征值:{}&quot;, fileMeta.getFileDigest());
        log.info(&quot;文件上链保存时间，datetime对应的int64类型:{}&quot;, fileMeta.getUploadTime());
        log.info(&quot;文件的删除状态，取值1=删除；0=有效:{}&quot;, fileMeta.getDelStatus());
        log.info(&quot;当前版本元数据的生成时间戳，datetime对应的int64类型:{}&quot;, fileMeta.getMetaTimestamp());
        log.info(&quot;签名的信息:{}&quot;, fileMeta.getTcVerifyData());
        log.info(&quot;自动核验 任务记录,key:callId:{}&quot;, fileMeta.getVerifyRecs());

        //事件触发条件：在&quot;文件元数据获取&quot;链上操作处理彻底完成，文件元数据已成功下载。
        status[0] = commonStatus;
        cdl.countDown();

        log.info(&quot;onSuccess，返回信息[{}]&quot;, commonStatus);
    }

    @Override
    public void onFailure(FileMetaFetchStatus commonStatus, Object context) {
        //事件触发条件：在&quot;文件元数据获取&quot;链上操作处理失败，文件元数据未被下载。
        log.info(&quot;onFailure，返回信息[{}]&quot;, commonStatus.toString());
    }

    @Override
    public void onError(FetchException e, Object context) {
        //事件触发条件：FileMetaFetch调用出现异常。并返回异常信息。
        log.info(&quot;onError，返回信息[{}]&quot;, e.toString());
    }
};
// Config.FILE_ID   --文件ID
fileFetch.setFileID(Config.FILE_ID);
//fileFetch.setVersionID(Config.FILE_VERSION);
//Config.OWNER_ADDRESS  --用户私钥对应的地址
fileFetch.setFetcherID(Config.OWNER_ADDRESS);
//Config.OWNER_ADDRESS  --用户私钥
fileFetch.query(Config.OWNER_PRIVATE_KEY);
cdl.await();
Assertions.assertTrue(status[0].getErrorCode() == 1);
</code></pre><h3 id="文件本体获取" tabindex="-1">文件本体获取 <a class="header-anchor" href="#文件本体获取" aria-label="Permalink to &quot;文件本体获取&quot;">​</a></h3><p>下载特定的链上业务域中的文件的文件本体。</p><p>*<strong>Java调用示例</strong></p><pre><code>CountDownLatch cdl = new CountDownLatch(1);
final FileFetchStatus[] status = {null};
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL);
FileFetch fileFetch = new FileFetch(frontend, Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onSuccess(FileFetchStatus commonStatus, Object context) {
        log.info(&quot;文件Body:{}&quot;, commonStatus.getFileBody());
        log.info(&quot;错误码:{}&quot;, commonStatus.getErrorCode());
        log.info(&quot;信息:{}&quot;, commonStatus.getMessage());
        status[0] = commonStatus;
        cdl.countDown();

    }

    @Override
    public void onFailure(FileFetchStatus commonStatus, Object context) {
        cdl.countDown();
        log.info(&quot;文件下载失败，返回信息[{}]&quot;, commonStatus.toString());
    }

    @Override
    public void onError(FetchException e, Object context) {
        cdl.countDown();
        log.info(&quot;文件下载异常，返回信息[{}]&quot;, e);
    }
};
// Config.FILE_ID   --文件ID
fileFetch.setFileID(Config.FILE_ID);
// fileFetch.setVersionID(&quot;8ecc143f9740636b4e525d6497f9e26e332362998bb2d91d11a1724a0f2dd11efc&quot;);
fileFetch.setFilePath(&quot;D:\\\\test1&quot;);
//Config.OWNER_ADDRESS  --用户私钥对应的地址
fileFetch.setFetcherID(Config.OWNER_ADDRESS);
//Config.OWNER_ADDRESS  --用户私钥
fileFetch.query(Config.OWNER_PRIVATE_KEY);
cdl.await();
Assertions.assertTrue(status[0].getErrorCode() == 1);
</code></pre><h3 id="文件删除" tabindex="-1">文件删除 <a class="header-anchor" href="#文件删除" aria-label="Permalink to &quot;文件删除&quot;">​</a></h3><p>所有者对指定业务域中的特定文件设置为删除状态。</p><p>文件一旦为设置为删除状态，特定文件将无法再继续进行&quot;文件本体更新&quot;和&quot;文件元数据更新&quot;。</p><p>*<strong>Java调用示例</strong></p><pre><code>CountDownLatch cdl = new CountDownLatch(1);
final FileTxStatus[] status = {null};
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL);
FileDelete fileUpload = new FileDelete(frontend, Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件删除上链交易发送成功，等待区块链执行处理。
        log.info(&quot;1 发送交易成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件删除上链交易发送失败。
        //事件触发后，会返回错误信息。
        log.info(&quot;1 发送交易失败&quot;);
    }

    @Override
    public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件删除上链交易执行成功，等待落块确认。
        log.info(&quot;2 确认落块成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件删除上链交易执行失败，删除状态变更未在链上生效。
        //事件触发后，会返回错误信息。删除状态变更上链交易请求需重新提交。

        log.info(&quot;2 确认落块失败&quot;);
    }

    @Override
    public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
        log.info(&quot;3 文件上链成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
        log.info(&quot;3 文件上链失败&quot;);
    }

    @Override
    public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件删除上链交易执行成功，并获得落块确认。
        FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
        log.info(&quot;文件ID&quot; + txBlockData.getFileID());
        log.info(&quot;文件版本ID&quot; + txBlockData.getVersionID());
        log.info(&quot;交易hash&quot; + txBlockData.getTxHash());
        log.info(&quot;交易上链时间&quot; + txBlockData.getTxExecTimestamp());
        log.info(&quot;交易块儿hash&quot; + txBlockData.getBlockHash());
        log.info(&quot;交易落块儿时间&quot; + txBlockData.getBlockedTimestamp());
        log.info(&quot;交易块儿高度&quot; + txBlockData.getBlockHeight());
        log.info(&quot;当前链最高块儿&quot; + txBlockData.getCurrentBlockHeight());
        status[0] = fUplStatus;
        cdl.countDown();
        //事件触发条件：文件授权上链交易执行成功，并获得落块确认。
        log.info(&quot;4  12块儿确认成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：文件删除上链交易落块确认失败，删除状态变更被链回滚。
        //事件触发后，会返回错误信息。文件删除上链交易请求需重新提交。
        log.info(&quot;4  12块儿确认失败&quot;);
    }

    @Override
    public void onError(TxException e, Object context) {
        //事件触发条件：FileDelete调用出现异常。并返回异常信息。
        log.info(&quot;失败&quot;);
    }
};
// Config.FILE_ID   --指定要进行删除的链上文件的文件链上ID
fileUpload.setFileID(Config.FILE_ID);
//Config.OWNER_ADDRESS  --用户私钥对应的地址
fileUpload.setOwnerID(Config.OWNER_ADDRESS);
//Config.OWNER_ADDRESS  --用户私钥
fileUpload.submit(Config.OWNER_PRIVATE_KEY);
cdl.await();
Assertions.assertTrue(status[0].getErrorCode() == 1);
</code></pre><h3 id="文件本体清空" tabindex="-1">文件本体清空 <a class="header-anchor" href="#文件本体清空" aria-label="Permalink to &quot;文件本体清空&quot;">​</a></h3><p>文件本体清空是文件所有者对链上业务域中特定文件的所有（版本）文件本体从链上彻底清空的系列操作。文件本体清空主要包含2个步骤：文件本体清空申请和文件本体清空审批。</p><p>链上文件如需进行文件本体清空，相应的链上文件必须被FileDelete设置为删除状态；随后文件所有者向区块链提交文件本体清空申请，且审批人列表中必须包含全部所有者和任意的非所有者数字身份标识；在所有清空审批人列表中审批人均同意清空后，文件的所有版本的文件本体将从区块链节点网络中彻底删除；被文件本体清空的文件的元数据依然会保留在区块链系统中，便于事后审计。</p><h4 id="清空申请" tabindex="-1">清空申请 <a class="header-anchor" href="#清空申请" aria-label="Permalink to &quot;清空申请&quot;">​</a></h4><p>链上业务域中特定文件的所有者向区块链提交文件本体清空申请，等待后续清空审批确认。提交文件本体清空申请时会提交清空审批人列表，指定哪些审批人要参与清空审批。</p><p>*<strong>Java调用示例</strong></p><pre><code>CountDownLatch cdl = new CountDownLatch(1);
final FileTxStatus[] status = {null};
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
FileEmptyApply fileEmptyApply = new FileEmptyApply(frontend,Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：清空申请上链交易发送成功，等待区块链执行处理。
        log.info(&quot;1 发送交易成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        //事件触发条件：清空申请上链交易发送失败。
        //事件触发后，会返回错误信息。
        log.info(&quot;1 发送交易失败&quot;);
    }

    @Override
    public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：清空申请上链交易执行成功，等待落块确认。
        log.info(&quot;2 确认落块成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        //事件触发条件：清空申请上链交易执行失败，清空审批人名单未在链上生效。
        //事件触发后，会返回错误信息。清空申请上链交易请求需重新提交。
        log.info(&quot;2 确认落块失败&quot;);
    }

    @Override
    public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
        log.info(&quot;3 文件上链成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        log.info(&quot;3 文件上链失败&quot;);
    }

    @Override
    public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：清空申请上链交易执行成功，并获得落块确认。
        FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
        log.info(&quot;文件ID&quot; + txBlockData.getFileID());
        log.info(&quot;文件版本ID&quot; + txBlockData.getVersionID());
        log.info(&quot;交易hash&quot; + txBlockData.getTxHash());
        log.info(&quot;交易上链时间&quot; + txBlockData.getTxExecTimestamp());
        log.info(&quot;交易块儿hash&quot; + txBlockData.getBlockHash());
        log.info(&quot;交易落块儿时间&quot; + txBlockData.getBlockedTimestamp());
        log.info(&quot;交易块儿高度&quot; + txBlockData.getBlockHeight());
        log.info(&quot;当前链最高块儿&quot; + txBlockData.getCurrentBlockHeight());
        status[0] = fUplStatus;
        cdl.countDown();

        log.info(&quot;4  12块儿确认成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        //事件触发条件：清空申请上链交易落块确认失败，清空申请被链回滚。
        //事件触发后，会返回错误信息。清空申请上链交易请求需重新提交。
        log.info(&quot;4  12块儿确认失败&quot;);
    }

    @Override
    public void onError(TxException e, Object context) {
        cdl.countDown();
        //事件触发条件：FileEmptyApply调用出现异常。并返回异常信息。
        log.info(&quot;异常，[{}]&quot;,e);
    }
};
// Config.FILE_ID  --指定要进行清空申请的链上文件的文件链上ID。
fileEmptyApply.setFileID(Config.FILE_ID);
//Config.OWNER_ADDRESS  --用户私钥对应的地址
fileEmptyApply.setOwnerID(Config.OWNER_ADDRESS);
String[] redarry={&quot;6b637aab70e47e1a54329bae01a69ca54a19e0f2&quot;,&quot;566ce0689fd23cd12be7de0c946b1a83e52393d4&quot;,&quot;3b10441f366cbe9baa54f39bee98faaf861f62bb&quot;};
//设置参与清空审批的数字身份标识列表
fileEmptyApply.setApprovers(redarry);
//进行文件清空申请上链操作提交
// Config.OWNER_PRIVATE_KEY  --赋值文件所有者数字身份私钥（即上链交易提交人）
fileEmptyApply.submit(Config.OWNER_PRIVATE_KEY);
cdl.await();
Assertions.assertTrue(status[0].getErrorCode() == 1);
</code></pre><h4 id="清空审批" tabindex="-1">清空审批 <a class="header-anchor" href="#清空审批" aria-label="Permalink to &quot;清空审批&quot;">​</a></h4><p>在清空审批人列表中的审批人通过调用清空审批接口向区块链系统提交审批意见（同意/拒绝）。</p><p>*<strong>调用示例</strong></p><pre><code>CountDownLatch cdl = new CountDownLatch(1);
final FileTxStatus[] status = {null};
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
FileEmptyApprove fileEmptyApprove = new FileEmptyApprove(frontend,Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：清空审批上链交易发送成功，等待区块链执行处理。
        log.info(&quot;1 发送交易成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        //事件触发条件：清空审批上链交易发送失败。
        //事件触发后，会返回错误信息。
        log.info(&quot;1 发送交易失败&quot;);
    }

    @Override
    public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
        //事件触发条件：清空审批上链交易执行成功，等待落块确认。
        log.info(&quot;2 确认落块成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        //事件触发条件：清空审批上链交易执行失败，清空审批结果未在链上生效。 
        //事件触发后，会返回错误信息。清空审批上链交易请求需重新提交。
        log.info(&quot;2 确认落块失败&quot;);
    }

    @Override
    public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
        log.info(&quot;3 文件上链成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        log.info(&quot;3 文件上链失败&quot;);
    }

    @Override
    public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
        FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
        log.info(&quot;文件ID&quot; + txBlockData.getFileID());
        log.info(&quot;文件版本ID&quot; + txBlockData.getVersionID());
        log.info(&quot;交易hash&quot; + txBlockData.getTxHash());
        log.info(&quot;交易上链时间&quot; + txBlockData.getTxExecTimestamp());
        log.info(&quot;交易块儿hash&quot; + txBlockData.getBlockHash());
        log.info(&quot;交易落块儿时间&quot; + txBlockData.getBlockedTimestamp());
        log.info(&quot;交易块儿高度&quot; + txBlockData.getBlockHeight());
        log.info(&quot;当前链最高块儿&quot; + txBlockData.getCurrentBlockHeight());
        status[0] = fUplStatus;
        cdl.countDown();
        //事件触发条件：清空审批上链交易执行成功，并获得落块确认。
        log.info(&quot;4  12块儿确认成功，返回信息为[{}]&quot;, JsonSerializer.formatToString(fUplStatus));
    }

    @Override
    public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
        cdl.countDown();
        //事件触发条件：清空审批上链交易落块确认失败，清空审批被链回滚。
        //事件触发后，会返回错误信息。清空审批上链交易请求需重新提交。
        log.info(&quot;4  12块儿确认失败&quot;);
    }

    @Override
    public void onError(TxException e, Object context) {
        cdl.countDown();
        //事件触发条件：FileEmptyApprove调用出现异常。并返回异常信息。
        log.info(&quot;异常，[{}]&quot;,e);
    }
};
//Config.FILE_ID   --指定要进行文件本体清空审批的链上文件的文件链上ID。
fileEmptyApprove.setFileID(Config.FILE_ID);

//用新加同意审核的人address
fileEmptyApprove.setApproverID(&quot;05dba391fa240bf1158fdc7c34d06e2b4fa4d3fc&quot;);
//是否同意删除  1 同意  2 拒绝
fileEmptyApprove.setReply(1);
//用新加同意审核的人私钥  （申请审批需要三个人以上，这个方法也要执行三次以上）
fileEmptyApprove.submit(&quot;7923ced7879918f7ee8e531e56fa7b1daf57473ac511f987bacd782152bf7080&quot;);
cdl.await();
Assertions.assertTrue(status[0].getErrorCode() == 1);
</code></pre><h3 id="文件验真" tabindex="-1">文件验真 <a class="header-anchor" href="#文件验真" aria-label="Permalink to &quot;文件验真&quot;">​</a></h3><p>获取指定业务域中指定文件的指定版本的文件本体指纹特征值，以便和自己本地拥有的文件进行一致性验证。任何人都有权获取，但调用的业务系统身份标识需要获得相应业务域的访问许可授权。</p><p>*<strong>Java调用示例</strong></p><pre><code>// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
FileDigest fileFetch = new FileDigest(frontend,Config.BUSINESS_DOMAIN_ID);
// Config.FILE_ID   --文件ID
fileFetch.setFileID(Config.FILE_ID);
//Config.FILE_VERSION  --文件的版本号
fileFetch.setVersionID(Config.FILE_VERSION);
//fileDigest    --文件指纹特征（文件hash）
String fileDigest=&quot;99efff17767e7d2395bac1defd90e2e9acb7ab1d923bd83d59ab50fa7a000a81&quot;;
fileFetch.setFileDigest(fileDigest);
FileDigestCheckStatus status =fileFetch.query();
log.info(&quot;MDcheck 结果:{}&quot;,status);
Thread.sleep(3000);
</code></pre><h3 id="文件追溯" tabindex="-1">文件追溯 <a class="header-anchor" href="#文件追溯" aria-label="Permalink to &quot;文件追溯&quot;">​</a></h3><p>依据文件在链上的历史版本列表信息，遍历链上文件的不同版本的元数据和文件本体内容，即查看链上文件的历史演变过程。</p><p>*<strong>Java调用示例</strong></p><pre><code>CountDownLatch cdl = new CountDownLatch(1);
final FileVersionsFetchStatus[] status = {null};
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
//--创建前置节点对象
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
FileVersionsFetch fileFetch = new FileVersionsFetch(frontend,Config.BUSINESS_DOMAIN_ID){

    @Override
    public void onSuccess(FileVersionsFetchStatus commonStatus, Object context) {
        List&lt;FileVersionsFetchStatus.FileVersionInfo&gt; versions = commonStatus.getVersions();
        for (int i=0; i&lt; versions.size(); i++) {
            log.info(&quot;文件版本标识:{} &quot; + versions.get(i).getVersionID());
            log.info(&quot;文件版本的生成时间戳:{}&quot; + versions.get(i).getTimestamp());
        }
        log.info(&quot;错误码:{} &quot; +  commonStatus.getErrorCode());
        log.info(&quot;返回信息:{} &quot; + commonStatus.getMessage());
        status[0] = commonStatus;
        //事件触发条件：在&quot;获取文件版本列表&quot;成功下载。
        log.info(&quot;onSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(commonStatus));
        cdl.countDown();
    }

    @Override
    public void onFailure(FileVersionsFetchStatus commonStatus, Object context) {
        //事件触发条件：&quot;文件版本列表获取&quot;链上操作处理失败，文件版本列表未被下载。
        log.info(&quot;onFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(commonStatus));
        cdl.countDown();
    }

    @Override
    public void onError(FetchException e, Object context) {
        //事件触发条件：FileVersionsFetch调用出现异常。并返回异常信息。
        log.info(&quot;onError，返回信息为[{}]&quot;, JsonSerializer.formatToString(e));
        cdl.countDown();
    }
};

//Config.FILE_ID  --指定获取文件版本列表的链上文件的文件链上ID。
fileFetch.setFileID(Config.FILE_ID);
//        fileFetch.setFetcherID(&quot;46f443513fcb863a77d736554146a98bec8826e0&quot;);
//进行&quot;文件版本列表获取&quot;上链操作提交
//Config.OWNER_ADDRESS  --用户私钥
fileFetch.query(Config.OWNER_PRIVATE_KEY);
cdl.await();
Assertions.assertTrue(status[0].getErrorCode() == 1);
</code></pre><h2 id="结构数据操作" tabindex="-1">结构数据操作 <a class="header-anchor" href="#结构数据操作" aria-label="Permalink to &quot;结构数据操作&quot;">​</a></h2><p>从法链提供结构数据上链保存及链上全生命周期管理，从而利用区块链的防篡改、防灭失等技术特性，实现结构数据的长久保真。链外应用系统通过调用前置节点服务器上的一系列结构数据链上操作接口，实现结构数据的上链保存、可信共享、删除、版本追溯、链上数据验真等功能。</p><p>结构数据保存于从法链特定业务域中，并被从法链利用数据加密、权限控制、访问准入等技术手段进行全方位隐私保护，从而确保链上数据的安全性。只有获得合法权限方可被区块链引擎允许对相应的链上保存的结构数据进行相应的链上操作。换句话说，虽然结构数据保存在从法链的各个节点服务器上，但任何人在未获得授权的情况下，均无法获取链上保存的结构够数据的真实内容，即使通过节点服务器存储进行强行获取。</p><p>*<strong>链上数据结构</strong></p><p><img src="`+l+`" alt=""></p><ul><li>结构数据体：用于保存结构数据具体内容。结构数据体以字符串类型在链上进行保存，建议用JSON/XML格式构建结构数据，并序列化成字符串；结构数据单体尺寸上限为8MB；结构数据体内容被从法链加密保存。 <ul><li>附属属性（可选）：从法链提供附属属性，用于描述结构数据的特征属性。附属属性以字符串类型在链上进行保存，建议用JSON/XML格式构建，并序列化成字符串；附属属性单体尺寸上限为1MB；附属属性内容被从法链加密保存。</li><li>数据所有者：记录结构数据所有者数字身份标识。数据拥有者拥有对结构数据的完整控制权：管理哪些数字身份标识可以读取结构数据体和附属属性内容；对结构数据体或附属属性内容进行版本更新；对结构数据进行废除；对结构数据进行追溯；结构数据验真等。数据所有者有权添加和删除数据分享者列表和数据读取者列表中的数字身份标识；当删除特定的分享者时，此分享者所有授权的读取者会一并被删除；如果某个数字身份标识同时被多人（所有者/分享者）授权拥有读取权限，则只有所有授权人将相应的读取权限删除，否则此数字身份标识会继续拥有读取权限。数据所有者数字身份标识以字符串类型在链上进行明文保存。</li><li>数据分享者列表：记录所有拥有数据分享权限的数字身份标识名单。在数据分享者列表中的数字身份可以进行如下操作：向数据读取者列表中添加/删除数字身份标识的权利（只能删除自己授权的数字身份标识）；读取结构数据体和附属属性内容；对结构数据进行追溯；结构数据验真等。数据分享者列表中数字身份标识以字符串类型在链上进行明文保存。</li><li>数据读取者列表：记录所有拥有读取结构数据权限的数字身份标识名单。在数据读取者列表中的数字身份可以进行如下操作：读取结构数据体和附属属性内容；对结构数据进行追溯；结构数据验真等。数据读取者列表中数字身份标识以字符串类型在链上进行明文保存。</li><li>数据链上ID：记录结构数据的链上唯一标识，当使用此ID进行数据获取时，从法链会将最新版本的结构数据内容返回给调用者。数据链上ID以字符串类型在链上进行明文保存。</li><li>数据当前版本ID：记录结构数据当前版本的唯一标识，便于快速定位特定版本的结构数据内容。数据当前版本ID以字符串类型在链上进行明文保存。</li><li>当前版本提交时间戳：记录当前版本结构数据提交上链保存的时间。即通过调用前置节点上链交易提交接口，提交数据上链保存请求的时间。当前版本提交时间戳在链上明文保存。</li><li>数据历史版本ID列表：记录结构数据所有版本的唯一标识，便于依据特定历史版本ID进行结构数据相应版本的历史信息获取。数据历史版本ID以字符串类型在链上进行明文保存。</li><li>隶属业务域ID：记录结构数据所在业务域的身份标识。只有获得隶属业务域访问准入许可授权，方可接触此结构数据，但有没有结构数据操作能力，还需拥有结构数据的相应操作权限。</li></ul></li></ul><h3 id="数据保存" tabindex="-1">数据保存 <a class="header-anchor" href="#数据保存" aria-label="Permalink to &quot;数据保存&quot;">​</a></h3><p>将结构数据提交到指定的业务域中进行上链创建保存。</p><p>*<strong>Java调用示例</strong></p><pre><code>CountDownLatch cdl = new CountDownLatch(1);
// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID

Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL);
//        RandomKeyPairPool randomKeyPairPool = new RandomKeyPairPool(1);
//        frontend.setKeyPairPool(randomKeyPairPool);
final DataTxStatus[] dts = {new DataTxStatus()};
DataUpload fileUpload = new DataUpload(frontend, Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：结构数据上链保存成功，并获得落块确认。
        log.info(&quot;onTxBlockConfirm，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
        cdl.countDown();
        dts[0] = dUploadStatus;
        DataTxStatus.DataTxBlockInfo txBlockData = dUploadStatus.getTxBlockData();

        log.info(&quot;结构化数据唯一ID&quot;+txBlockData.getDataID());
        log.info(&quot;结构化数据ID&quot;+txBlockData.getVersionID());
        log.info(&quot;交易hash&quot;+txBlockData.getTxHash());
        log.info(&quot;交易上链时间&quot;+txBlockData.getTxExecTimestamp());
        log.info(&quot;交易块儿hash&quot;+txBlockData.getBlockHash());
        log.info(&quot;交易落块儿时间&quot;+txBlockData.getBlockedTimestamp());
        log.info(&quot;交易块儿高度&quot;+txBlockData.getBlockHeight());
        log.info(&quot;当前链最高块儿&quot;+txBlockData.getCurrentBlockHeight());
        log.info(&quot;状态&quot;+dUploadStatus.getStatus());
        log.info(&quot;错误码&quot;+dUploadStatus. getErrorCode());
        log.info(&quot;信息&quot;+dUploadStatus. getMessage());
    }

    @Override
    public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：结构数据保存上链交易落块确认失败，上链保存的结构数据被链回滚。
        //事件触发后，会返回错误信息。结构数据保存上链交易请求需重新提交。

        cdl.countDown();
        log.info(&quot;onTxBlockCfmFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：结构数据保存上链交易发送成功，等待区块链执行处理。
        log.info(&quot;onTxSendSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：结构数据保存上链交易发送失败。
        cdl.countDown();
        log.info(&quot;onTxSendFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));

    }

    @Override
    public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：结构数据保存上链交易执行成功，结构数据上链保存成功，等待落块确认
        log.info(&quot;onTxExecSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
//                dts[0] = dUploadStatus;
//                cdl.countDown();
    }

    @Override
    public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：结构数据保存上链交易执行失败，结构数据未上链保存。
        cdl.countDown();
        log.info(&quot;onTxExecFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onError(TxException e, Object context) {
        //事件触发条件：DataUpload调用出现异常。并返回异常信息。
        cdl.countDown();
        log.info(&quot;onError，返回信息为[{}]&quot;, JsonSerializer.formatToString(e));
    }
};
//上链保存的结构数据内容
String data =&quot;{\\n&quot;
    + &quot;\\&quot;受援人姓名\\&quot;:\\&quot;李四\\&quot;,\\n&quot;
    + &quot;\\&quot;证件类型\\&quot;:\\&quot;身份证\\&quot;,\\n&quot;
    + &quot;\\&quot;证件号码\\&quot;:\\&quot;310104198707148901\\&quot;,\\n&quot;
    + &quot;\\&quot;通知函号\\&quot;:\\&quot;上海刑援指字[2022]第（108）号\\&quot;,\\n&quot;
    + &quot;\\&quot;通知机关名称\\&quot;:\\&quot;上海华兴律师事务所\\&quot;,\\n&quot;
    + &quot;\\&quot;日期\\&quot;:\\&quot;2022年3月1日\\&quot;,\\n&quot;
    + &quot;\\&quot;案由\\&quot;:\\&quot;离婚纠纷\\&quot;,\\n&quot;
    + &quot;\\&quot;通知原因\\&quot;:\\&quot;当事人因经济原因无法聘请律师\\&quot;,\\n&quot;
    + &quot;\\&quot;承办律师姓名\\&quot;:\\&quot;张三\\&quot;,\\n&quot;
    + &quot;\\&quot;承办律师执业证号\\&quot;:\\&quot;111022008100000031\\&quot;,\\n&quot;
    + &quot;\\&quot;律师事务所名称\\&quot;:\\&quot;上海华兴律师事务所\\&quot;,\\n&quot;
    + &quot;\\&quot;时间戳\\&quot;:\\&quot;2022年3月1日 13:49:51\\&quot;\\n&quot;
    + &quot;}&quot;;

fileUpload.setDataContent(new StringBuilder().append(data));

fileUpload.setDataProperty(new StringBuilder().append(&quot;DataProperty&quot;));

Client.RoleItem.Builder roleItem1 = Client.RoleItem.newBuilder();
//Config.MANAGER_ADDRESS --管理者地址
roleItem1.setAddr(Config.MANAGER_ADDRESS);

fileUpload.setOwners(new Client.RoleItem[]{roleItem1.build()});
fileUpload.setReaders(new Client.RoleItem[]{roleItem1.build()});
fileUpload.setSharers(new Client.RoleItem[]{roleItem1.build()});
//Config.OWNER_PRIVATE_KEY  --用户私钥
fileUpload.submit(Config.OWNER_PRIVATE_KEY);
cdl.await();
Assert.assertEquals(dts[0].getErrorCode(),1);
</code></pre><h3 id="数据更新" tabindex="-1">数据更新 <a class="header-anchor" href="#数据更新" aria-label="Permalink to &quot;数据更新&quot;">​</a></h3><p>所有者对指定业务域中的结构数据的结构数据内容和附属属性内容进行更新。</p><p>结构数据更新时需将结构数据和附属属性内容一并提交。举例说明：</p><p><img src="`+u+`" alt=""></p><p>*<strong>Java调用示例</strong></p><pre><code>// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
CountDownLatch cdl = new CountDownLatch(1);
final DataTxStatus[] dts = {new DataTxStatus()};

Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
DataModify fileUpload = new DataModify(frontend,Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxBlockConfirm，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
        //事件触发条件：更新的结构数据成功上链保存，并获得落块确认。
        cdl.countDown();
        dts[0] = dUploadStatus;
        DataTxStatus.DataTxBlockInfo txBlockData = dUploadStatus.getTxBlockData();

        log.info(&quot;结构化数据唯一ID&quot;+txBlockData.getDataID());
        log.info(&quot;结构化数据ID&quot;+txBlockData.getVersionID());
        log.info(&quot;交易hash&quot;+txBlockData.getTxHash());
        log.info(&quot;交易上链时间&quot;+txBlockData.getTxExecTimestamp());
        log.info(&quot;交易块儿hash&quot;+txBlockData.getBlockHash());
        log.info(&quot;交易落块儿时间&quot;+txBlockData.getBlockedTimestamp());
        log.info(&quot;交易块儿高度&quot;+txBlockData.getBlockHeight());
        log.info(&quot;当前链最高块儿&quot;+txBlockData.getCurrentBlockHeight());
        log.info(&quot;状态&quot;+dUploadStatus.getStatus());
        log.info(&quot;错误码&quot;+dUploadStatus. getErrorCode());
        log.info(&quot;信息&quot;+dUploadStatus. getMessage());

    }

    @Override
    public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：结构数据更新上链交易落块确认失败，上链更新的结构数据被链回滚。
        //事件触发后，会返回错误信息。结构数据更新上链交易请求需重新提交。
        cdl.countDown();
        log.info(&quot;onTxBlockCfmFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：结构数据更新上链交易发送成功，等待区块链执行处理。
        log.info(&quot;onTxSendSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
        cdl.countDown();
        //事件触发条件：结构数据更新上链交易发送失败。
        log.info(&quot;onTxSendFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：结构数据更新上链交易执行成功，结构数据上链更新成功，等待落块确认。
        log.info(&quot;onTxExecSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
        cdl.countDown();
        //事件触发条件：结构数据更新上链交易执行失败，结构数据未上链保存。
        //事件触发后，会返回错误信息。结构数据更新上链交易请求需重新提交。
        log.info(&quot;onTxExecFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onError(TxException e, Object context) {
        cdl.countDown();
        //事件触发条件：DataModify调用出现异常。并返回异常信息。
        log.info(&quot;onError，返回信息为[{}]&quot;, JsonSerializer.formatToString(e));
    }
};
// Config.DATA_ID --数据ID
fileUpload.setDataID(Config.DATA_ID);
//要更新的结构数据内容
fileUpload.setDataContent(new StringBuilder(&quot;爱丽丝1&quot;));
// 要更新结构数据的附属属
fileUpload.setDataProperty( new StringBuilder(&quot;sdfsafds&quot;));
//进行结构数据更新上链操作提交
//Config.OWNER_PRIVATE_KEY --赋值结构数据所有者数字身份私钥，ownerID对应的私钥
fileUpload.submit(Config.OWNER_PRIVATE_KEY);
cdl.await();
Assert.assertEquals(dts[0].getErrorCode(),1);
</code></pre><h3 id="数据授权" tabindex="-1">数据授权 <a class="header-anchor" href="#数据授权" aria-label="Permalink to &quot;数据授权&quot;">​</a></h3><h4 id="授权-1" tabindex="-1">授权 <a class="header-anchor" href="#授权-1" aria-label="Permalink to &quot;授权&quot;">​</a></h4><p>所有者授权一组数字身份对指定业务域中的结构数据的拥有读取/所有者权限。</p><p>拥有读取权限的数字身份可以进行如下操作：读取结构数据体和附属属性内容；对结构数据进行追溯；结构数据验真等。</p><p>拥有所有者权限的数字身份可以进行如下操作：读取结构数据体和附属属性内容；对结构数据进行追溯；结构数据验真；数据更新；数据授权；数据删除等。</p><p>*<strong>Java调用示例</strong></p><pre><code>// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
CountDownLatch countDownLatch = new CountDownLatch(1);
final DataTxStatus[] dataTxStatus = {new DataTxStatus()};
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
DataAuthorise fileUpload = new DataAuthorise(frontend,Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
        dataTxStatus[0] = dUploadStatus;
        countDownLatch.countDown();
        log.info(&quot;onTxBlockConfirm，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxBlockCfmFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
        countDownLatch.countDown();
    }

    @Override
    public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxSendSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxSendFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
        countDownLatch.countDown();
    }

    @Override
    public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxExecSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));

    }

    @Override
    public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxExecFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
        countDownLatch.countDown();
    }

    @Override
    public void onError(TxException e, Object context) {
        log.info(&quot;onError，返回信息为[{}]&quot;, JsonSerializer.formatToString(e));
        countDownLatch.countDown();
    }
};




//被授权的地址
//Config.MANAGER_ADDRESS --被授权用户地址
String address = Config.MANAGER_ADDRESS;
String dataID= &quot;0e9287f776ee83fa9ff64507c82d2e4f9418330c&quot;;
fileUpload.setDataID(dataID);
Client.RoleItem.Builder roleItem = Client.RoleItem.newBuilder();
roleItem.setAddr(address);

//加入多个被授权地址
Client.RoleItem.Builder roleItem1 = Client.RoleItem.newBuilder();
roleItem1.setAddr(&quot;6683906ee504b014bb5cad396b0261c0eb294a21&quot;);

//读权限
fileUpload.setReaders(new Client.RoleItem[] {roleItem.build(),roleItem1.build()});

// 分享权限
fileUpload.setSharers(new Client.RoleItem[] {roleItem.build(),roleItem1.build()});

//上链操作
//Config.OWNER_PRIVATE_KEY  --用户私钥
fileUpload.submit(Config.OWNER_PRIVATE_KEY);
//等待callback信息
countDownLatch.await();
//断言成功失败
Assert.assertEquals(dataTxStatus[0].getErrorCode(),1);
</code></pre><h4 id="取消授权-1" tabindex="-1">取消授权 <a class="header-anchor" href="#取消授权-1" aria-label="Permalink to &quot;取消授权&quot;">​</a></h4><p>所有者收回特定数字身份对指定业务域中的结构数据的读取权限。</p><p>*<strong>Java调用示例</strong></p><pre><code>// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
CountDownLatch countDownLatch = new CountDownLatch(1);
final DataTxStatus[] dataTxStatus = {new DataTxStatus()};
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
DataAuthorise fileUpload = new DataAuthorise(frontend,Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
        dataTxStatus[0] = dUploadStatus;
        countDownLatch.countDown();
        log.info(&quot;onTxBlockConfirm，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxBlockCfmFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
        countDownLatch.countDown();
    }

    @Override
    public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxSendSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxSendFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
        countDownLatch.countDown();
    }

    @Override
    public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxExecSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));

    }

    @Override
    public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxExecFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
        countDownLatch.countDown();
    }

    @Override
    public void onError(TxException e, Object context) {
        log.info(&quot;onError，返回信息为[{}]&quot;, JsonSerializer.formatToString(e));
        countDownLatch.countDown();
    }
};
//被授权的地址
String dataID= &quot;2cf386470039706fcfc6bbbf16aeaaf3956bfecd&quot;;
fileUpload.setDataID(dataID);
//需要被删除的被授权地址
String [] removeList = {&quot;6683906ee504b014bb5cad396b0261c0eb294a28&quot;};
//删除权限操作，可以和添加权限操作同时执行
fileUpload.removeReaders(removeList);
//上链操作
fileUpload.submit(Config.OWNER_PRIVATE_KEY);
//等待callback信息
countDownLatch.await();
//断言成功失败
Assert.assertEquals(dataTxStatus[0].getErrorCode(),1);
</code></pre><h4 id="权限列表获取-1" tabindex="-1">权限列表获取 <a class="header-anchor" href="#权限列表获取-1" aria-label="Permalink to &quot;权限列表获取&quot;">​</a></h4><p>获取链上业务域中特定结构数据的权限列表信息，包括读取/分享/所有者权限列表。</p><ul><li><p>结构数据所有者有权获取完整的所有者列表和所有者分别授权的读取者列表；完整的分享者列表和分享者分别授权的读取者列表。</p></li><li><p>结构数据分享者有权获取自己授权的读取者列表。</p></li><li><p>结构数据读取者无权获取结构数据权限列表。 *<strong>Java调用示例</strong></p><p>// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥 // Config.FRONT_SERVER_URL --前置节点调用接口地址 // Config.BUSINESS_DOMAIN_ID --业务域ID CountDownLatch cdl = new CountDownLatch(1); final DataRightsFetchStatus[] rightsFetchStatus = {new DataRightsFetchStatus()}; Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL); DataRightsFetch fileUpload = new DataRightsFetch(frontend, Config.BUSINESS_DOMAIN_ID) {</p><p>@Override public void onSuccess(DataRightsFetchStatus dRightsFetchStatus, Object context) { rightsFetchStatus[0] = dRightsFetchStatus; log.info(&quot;onSuccess，返回信息为[{}]&quot;, dRightsFetchStatus); cdl.countDown();</p><pre><code>   System.out.println(&quot;链外应用系统调用端的唯一标识=&quot; + context);
   DataRightsFetchStatus.RightsInfo oDataRightsInfo = dRightsFetchStatus.getDataRights();
   for (int i = 0; i &lt; oDataRightsInfo.getOwners().size(); i++) {
       System.out.println(&quot;结构数据所有者身份标识: &quot; + oDataRightsInfo.getOwners().get(i));
   }

   //结构数据所有者所授权的分享者列表
   List&lt;DataRightsFetchStatus.Readers&gt; oSharersSetByOwner = dRightsFetchStatus.getDataRights().getReadersBySharer();
   for (int j = 0; j &lt; oSharersSetByOwner.size(); j++) {
       System.out.println(&quot;有授权分享者的结构数据所有者数字身份标识=&quot; + oSharersSetByOwner.get(j).getGrantorID());
       for (int n = 0; n &lt; oSharersSetByOwner.get(j).getReaders().size(); n++) {
           System.out.println(&quot;当前结构数据所有者授权的分享者数字身份标识=&quot; + oSharersSetByOwner.get(j).getReaders().get(n));
       }
   }
</code></pre><p>}</p><p>@Override public void onFailure(DataRightsFetchStatus dRightsFetchStatus, Object context) { log.info(&quot;onFailure，返回信息为[{}]&quot;, dRightsFetchStatus); cdl.countDown(); }</p><p>@Override public void onError(FetchException e, Object context) { log.info(&quot;onError，返回信息为[{}]&quot;, e); cdl.countDown(); } }; // Config.DATA_ID --指定获取权限列表的链上结构数据的结构数据链上ID fileUpload.setDataID(Config.DATA_ID); //进行&quot;结构数据权限列表获取&quot;上链操作提交 //Config.OWNER_PRIVATE_KEY --用户私钥 fileUpload.query(Config.OWNER_PRIVATE_KEY); cdl.await(); Assert.assertEquals(rightsFetchStatus[0].getErrorCode(), 1);</p></li></ul><h3 id="数据获取" tabindex="-1">数据获取 <a class="header-anchor" href="#数据获取" aria-label="Permalink to &quot;数据获取&quot;">​</a></h3><p>从特定的业务域中获取指定结构化数据的指定版本的链上数据和相关元数据。</p><p>被设置为删除状态的结构数据是可以被读取到的，只不过状态被标记为删除。</p><p>*<strong>Java调用示例</strong></p><pre><code>// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
CountDownLatch countDownLatch = new CountDownLatch(1);
final DataFetchStatus[] dFetchStatu = {new DataFetchStatus()};
DataFetch fileUpload = new DataFetch(frontend,Config.BUSINESS_DOMAIN_ID) {
    @Override
    public void onSuccess(DataFetchStatus dFetchStatus, Object context) {
        //事件触发条件：在&quot;数据获取&quot;链上操作处理彻底完成，数据已成功下载。
        log.info(&quot;结构化数据链上ID&quot;+ dFetchStatus.getData().getDataID());
        log.info(&quot;结构化数据链上ID&quot;+ dFetchStatus.getData().getDataID());
        log.info(&quot;结构化数据当前版本ID&quot;+ dFetchStatus.getData().getVersionID());
        log.info(&quot;结构化数据&quot;+ dFetchStatus.getData().getDataContent());
        log.info(&quot;结构化数据附属属性&quot;+ dFetchStatus.getData().getDataProperty());
        log.info(&quot;结构化数据本体指纹特征值&quot;+ dFetchStatus.getData().getDataDigest());
        log.info(&quot;结构化数据的删除状态，取值1=删除；0=有效&quot;+ dFetchStatus.getData().getDelStatus());
        log.info(&quot;结构化数据上链保存时间，datetime对应的int64类型&quot;+ dFetchStatus.getData().getUploadTime());
        log.info(&quot;敏感数据加密方式名称&quot;+ dFetchStatus.getData().getEncName());
        log.info(&quot; 密钥加密结果（新增）&quot;+ dFetchStatus.getData().getEncKey());
        log.info(&quot;结构化数据本体指纹特征值&quot;+ dFetchStatus.getData().getTcVerifyData());
        log.info(&quot;自动核验 任务记录,key:callId&quot;+ dFetchStatus.getData().getVerifyRecs());
        dFetchStatu[0] =dFetchStatus;
        log.info(&quot;onSuccess，返回信息为[{}]&quot;, dFetchStatus);
        String data =dFetchStatus.getData().getDataContent();
        log.info(&quot;上传的值&quot;+data);
        countDownLatch.countDown();


    }

    @Override
    public void onFailure(DataFetchStatus dFetchStatus, Object context) {
        //事件触发条件：在&quot;数据获取&quot;链上操作处理失败，数据未被下载。
        log.info(&quot;onFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dFetchStatus));
        countDownLatch.countDown();
    }

    @Override
    public void onError(FetchException e, Object context) {
        //事件触发条件：DataFetch调用出现异常。并返回异常信息。
        log.info(&quot;onFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(e));
        countDownLatch.countDown();
    }
};
//Config.DATA_ID   --数据唯一ID
fileUpload.setDataID(Config.DATA_ID);
//Config.OWNER_PRIVATE_KEY  --用户私钥
fileUpload.query(Config.OWNER_PRIVATE_KEY);
countDownLatch.await();
Assert.assertEquals(dFetchStatu[0].getErrorCode(),1);
</code></pre><h3 id="数据删除" tabindex="-1">数据删除 <a class="header-anchor" href="#数据删除" aria-label="Permalink to &quot;数据删除&quot;">​</a></h3><p>所有者对指定业务域中的结构数据设置为删除状态。</p><p>结构数据一旦为设置为删除状态，结构数据将无法再继续进行&quot;数据更新&quot;。</p><p>*<strong>Java调用示例</strong></p><pre><code>// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
CountDownLatch cdl = new CountDownLatch(1);
final DataTxStatus[] dts = {new DataTxStatus()};
DataDelete fileUpload = new DataDelete(frontend,Config.BUSINESS_DOMAIN_ID) {

    @Override
    public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
        log.info(&quot;onTxBlockConfirm，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
        //事件触发条件：数据删除上链交易执行成功，并获得落块确认。
        cdl.countDown();
        dts[0] = dUploadStatus;
        DataTxStatus.DataTxBlockInfo txBlockData = dUploadStatus.getTxBlockData();
        log.info(&quot;结构化数据唯一ID&quot;+txBlockData.getDataID());
        log.info(&quot;结构化数据ID&quot;+txBlockData.getVersionID());
        log.info(&quot;交易hash&quot;+txBlockData.getTxHash());
        log.info(&quot;交易上链时间&quot;+txBlockData.getTxExecTimestamp());
        log.info(&quot;交易块儿hash&quot;+txBlockData.getBlockHash());
        log.info(&quot;交易落块儿时间&quot;+txBlockData.getBlockedTimestamp());
        log.info(&quot;交易块儿高度&quot;+txBlockData.getBlockHeight());
        log.info(&quot;当前链最高块儿&quot;+txBlockData.getCurrentBlockHeight());
        log.info(&quot;状态&quot;+dUploadStatus.getStatus());
        log.info(&quot;错误码&quot;+dUploadStatus. getErrorCode());
        log.info(&quot;信息&quot;+dUploadStatus. getMessage());
    }

    @Override
    public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：数据删除上链交易落块确认失败，删除状态变更被链回滚。
        //事件触发后，会返回错误信息。数据删除上链交易请求需重新提交。
        cdl.countDown();
        log.info(&quot;onTxBlockCfmFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：数据删除上链交易发送成功，等待区块链执行处理。
        log.info(&quot;onTxSendSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：数据删除上链交易发送失败。
        //事件触发后，会返回错误信息。
        cdl.countDown();
        log.info(&quot;onTxSendFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：数据删除上链交易执行成功，等待落块确认。
        log.info(&quot;onTxExecSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
        //事件触发条件：数据删除上链交易执行失败，删除状态变更未在链上生效。
        //事件触发后，会返回错误信息。删除状态变更上链交易请求需重新提交。
        cdl.countDown();
        log.info(&quot;onTxExecFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dUploadStatus));
    }

    @Override
    public void onError(TxException e, Object context) {
        //事件触发条件：DataDelete调用出现异常。并返回异常信息。
        cdl.countDown();
        log.info(&quot;onError，返回信息为[{}]&quot;, JsonSerializer.formatToString(e));
    }
};

// Config.DATA_ID --数据ID
fileUpload.setDataID(Config.DATA_ID);
//Config.OWNER_PRIVATE_KEY  --用户私钥
fileUpload.submit(Config.OWNER_PRIVATE_KEY);
cdl.await();
Assert.assertEquals(dts[0].getErrorCode(),1);
</code></pre><h3 id="数据验真" tabindex="-1">数据验真 <a class="header-anchor" href="#数据验真" aria-label="Permalink to &quot;数据验真&quot;">​</a></h3><p>获取指定业务域中指定结构数据的指定版本的数据体指纹特征值，以便和自己本地拥有的数据体进行一致性验证。任何人都有权获取，但调用的业务系统身份标识需要获得相应业务域的访问许可授权。</p><p>*<strong>Java调用示例</strong></p><pre><code>// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
// Config.FRONT_SERVER_URL --前置节点调用接口地址
// Config.BUSINESS_DOMAIN_ID --业务域ID
Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
DataDigestCheck fileUpload = new DataDigestCheck(frontend,Config.BUSINESS_DOMAIN_ID);
// Config.DATA_ID  --数据唯一ID
fileUpload.setDataID(Config.DATA_ID);
//Config.DATA_VERSION   --数据版本
fileUpload.setVersionID(Config.DATA_VERSION);
//dataDigest   --结构化数据指纹特征（文件hash）  查询的时候返回
String dataDigest=&quot;b29a761257ad59867764539056b8dc13ce3a32e69a078767f3d854233727dc0e&quot;;
fileUpload.setDataDigest(dataDigest);
DataDigestCheckStatus ret =fileUpload.query();
log.info(&quot;DataDigestCheckStatus:&quot;+ret);
while (true){
    Thread.sleep(10);
}
</code></pre><h3 id="数据追溯" tabindex="-1">数据追溯 <a class="header-anchor" href="#数据追溯" aria-label="Permalink to &quot;数据追溯&quot;">​</a></h3><p>依据结构化数据在链上的历史版本列表信息，遍历链上结构数据的不同版本的内容，即查看链上结构数据的历史演变过程。</p><ul><li><p><strong>Java调用示例</strong></p><p>// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥 // Config.FRONT_SERVER_URL --前置节点调用接口地址 // Config.BUSINESS_DOMAIN_ID --业务域ID CountDownLatch cdl = new CountDownLatch(1); final DataVersionsFetchStatus[] dvf = {new DataVersionsFetchStatus()}; Frontend frontend = new Frontend(com.coolawchain.sdk.config.Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL); DataVersionsFetch fileUpload = new DataVersionsFetch(frontend,Config.BUSINESS_DOMAIN_ID){</p><pre><code>@Override
public void onSuccess(DataVersionsFetchStatus dVerFetchStatus, Object context) {
    cdl.countDown();
    dvf[0] = dVerFetchStatus;
    //事件触发条件：&quot;获取数据版本列表&quot;成功下载。
    //事件触发条件：&quot;获取数据版本列表&quot;成功下载。

    List&lt;DataVersionsFetchStatus.DataVersionInfo&gt; oDataVersionInfo = dVerFetchStatus.getVersions();
    for (int i=0; i&lt; oDataVersionInfo.size(); i++) {
        System.out.println(&quot;数据版本标识: &quot; + oDataVersionInfo.get(i).getVersionID());
        System.out.println(&quot;数据版本的生成时间戳: &quot; + oDataVersionInfo.get(i).getTimestamp());
    }
        log.info(&quot;onSuccess，返回信息为[{}]&quot;, JsonSerializer.formatToString(dVerFetchStatus));
}

@Override
public void onFailure(DataVersionsFetchStatus dVerFetchStatus, Object context) {
    cdl.countDown();
    //事件触发条件：&quot;数据版本列表获取&quot;链上操作处理失败，数据版本列表未被下载。
    log.info(&quot;onFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(dVerFetchStatus));
}

@Override
public void onError(FetchException e, Object context) {
    cdl.countDown();
    //事件触发条件：DataVersionsFetch调用出现异常。并返回异常信息。
    log.info(&quot;onFailure，返回信息为[{}]&quot;, JsonSerializer.formatToString(e));
}
</code></pre><p>};</p><p>//Config.DATA_ID --用户唯一ID fileUpload.setDataID(Config.DATA_ID); //Config.OWNER_PRIVATE_KEY --用户私钥 fileUpload.query(Config.OWNER_PRIVATE_KEY); cdl.await(); Assert.assertEquals(dvf[0].getErrorCode(),1);</p></li></ul><h2 id="合约操作" tabindex="-1">合约操作 <a class="header-anchor" href="#合约操作" aria-label="Permalink to &quot;合约操作&quot;">​</a></h2><p>智能合约通常用于规范业务数据结构以及数据的操作行为，合约一旦发布于链上合约代码将会固化下来，从而杜绝代码级篡改。</p><p>智能合约由业务域管理员发布于从法链特定的业务域中，合约内数据读写权限和合约方法的调用权限完全由合约内代码自行控制，因此从法链不提供系统级预置元数据和权限控制。</p><ul><li><strong>链上数据结构</strong></li></ul><p><img src="`+r+`" alt=""></p><ul><li>合约链上ID：记录合约的链上唯一标识，使用此ID进行合约调用。合约链上ID以字符串类型在链上进行明文保存。 <ul><li>隶属业务域ID：记录合约所在业务域的身份标识。只有获得隶属业务域访问准入许可授权，方可调用此合约，但能不能访问合约内数据或调用合约暴露出来的方法，由合约内代码自行控制。</li></ul></li></ul><h3 id="合约方法调用" tabindex="-1">合约方法调用 <a class="header-anchor" href="#合约方法调用" aria-label="Permalink to &quot;合约方法调用&quot;">​</a></h3><ul><li><p><strong>Java调用示例</strong></p><p>// Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥 // Config.FRONT_SERVER_URL --前置节点调用接口地址 // Config.BUSINESS_DOMAIN_ID --业务域ID //--创建前置节点对象 Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL); CountDownLatch cdl = new CountDownLatch(1); final ContractCallStatus[] ccs = {new ContractCallStatus()}; ContractCall fileMetaUpate = new ContractCall(frontend,Config.BUSINESS_DOMAIN_ID) {</p><pre><code>@Override
public void onTxBlockConfirm(ContractCallStatus scCallStatus, Object context) {
    //事件触发条件：合约调用成功，并获得落块确认。
    cdl.countDown();
    ccs[0]=scCallStatus;
    ContractCallStatus.TxBlockData scTxBlockInfoTxBlockData = scCallStatus.getSCTxBlockInfoTxBlockData();
    log.info(&quot;块信息&quot;+scTxBlockInfoTxBlockData);
    ContractCallStatus.ContractTxInfo scHexReturnData = scCallStatus.getSCHexReturnData();
    log.info(&quot;合约交易Hash&quot;+scHexReturnData.getTxHash());
    log.info(&quot;合约交易上链时间&quot;+scHexReturnData.getTxExecTimestamp());
    log.info(&quot;合约调用成功后的返回结构数据，返回结构遵循合约定义。此字段会在TxExecSuccess和TxBlockConfirm状态时返回。&quot;+scHexReturnData.getScResult());
}

@Override
public void onTxBlockCfmFailure(ContractCallStatus scCallStatus, Object context) {
    //事件触发条件：合约调用上链交易落块确认失败，合约调用影响的链上数据变化被链回滚。
    //事件触发后，会返回错误信息。合约调用上链交易请求需重新提交。
    log.info(&quot;返回同上onTxBlockConfirm&quot;);
}

@Override
public void onTxSendSuccess(ContractCallStatus scCallStatus, Object context) {
    //事件触发条件：合约调用上链交易发送成功，等待区块链执行处理。
    log.info(&quot;返回同上onTxBlockConfirm&quot;);
}

@Override
public void onTxSendFailure(ContractCallStatus scCallStatus, Object context) {
    //事件触发条件：合约调用上链交易发送失败。
    log.info(&quot;返回同上onTxBlockConfirm&quot;);
}

@Override
public void onTxExecSuccess(ContractCallStatus scCallStatus, Object context) {
    //事件触发条件：合约调用上链交易执行成功，等待落块确认。
    log.info(&quot;返回同上onTxBlockConfirm&quot;);
}

@Override
public void onTxExecFailure(ContractCallStatus scCallStatus, Object context) {
    //事件触发条件：合约调用上链交易执行失败，合约调用影响的链上数据变化未上链生效。
    log.info(&quot;返回同上onTxBlockConfirm&quot;);
}

@Override
public void onError(TxException e, Object context) {
    //事件触发条件：ContractCall调用出现异常。并返回异常信息。
}
</code></pre><p>}; //callData 合约api String callData =&quot;0x58a40cc40000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000026331000000000000000000000000000000000000000000000000000000000000&quot;; //合约地址 String scAddress =&quot;0x778809772010E60ACeC161B8Aa965B42004033Df&quot;; fileMetaUpate.setSCHexParam(callData); fileMetaUpate.setSCAddress(scAddress); //Config.OWNER_PRIVATE_KEY --用户私钥 fileMetaUpate.submit(Config.OWNER_PRIVATE_KEY); cdl.await(); Assert.assertEquals(ccs[0].getErrorCode(),1);</p></li></ul>`,125),f=[s];function d(S,g,D,p,q,x){return n(),e("div",null,f)}const F=o(c,[["render",d]]);export{h as __pageData,F as default};
