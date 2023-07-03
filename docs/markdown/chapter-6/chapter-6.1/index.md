---
prev: false
next: false
---
# 链上操作

## 调用前置条件


  * 链外应用系统调用的前置节点服务器必须获得从法链的访问准入许可授权。
  * 链外应用系统身份标识必须获得要访问的链上业务域的访问准入许可授权。

## 文件操作

从法链提供非结构化文件上链保存及链上全生命周期管理，从而利用区块链的防篡改、防灭失等技术特性，实现文件的长久保真。从法链特有之处在于通过碎密随机分布、容量智能分片、时空证明、零知识证明等技术，真正意义的将文件本体保存于区块链中，并实现链上文件的防篡改、防灭失、长久保真。

链外应用系统通过调用前置节点服务器上的一系列文件链上操作接口，实现文件的上链保存、可信共享、删除、版本追溯、文件验真等功能。

文件保存于从法链特定业务域中，并被从法链利用碎密随机分布、权限控制、访问准入等技术手段进行全方位隐私保护，从而确保链上文件的安全性。只有获得合法权限方可被区块链引擎允许对相应的链上保存的文件进行相应的链上操作。换句话说，虽然文件被加密、分片、随机保存在从法链的各个节点服务器上，但任何人在未获得授权的情况下，均无法获取链上保存的文件本体和元数据的真实内容，即使通过节点服务器存储进行强行获取。

  ***链上数据结构**

![](/4d5516abc8a1007c42faf95176cf770f.png)

  * 文件本体：用于保存文件具体内容。链上保存的文件本体利用碎密随机分布、容量智能分片、时空证明、零知识证明等技术，分散保存于从法链节点网络中；文件单体尺寸上限为500MB；文件本体内容被从法链加密保存。
    * 文件描述（可选）：从法链提供的文件元数据的一部分，用于对文件的用途和作用做出描述。文件描述的尺寸上限为1KB；文件描述内容被从法链加密保存。
    * 附属属性（可选）：从法链提供的文件元数据的一部分，用于描述文件的特征属性。附属属性以字符串类型在链上进行保存，建议用JSON/XML格式构建，并序列化成字符串；附属属性单体尺寸上限为1MB；附属属性内容被从法链加密保存。
    * 文件名：从法链提供的文件元数据的一部分，用于记录文件的名称。文件名以字符串类型在链上进行明文保存。
    * 文件类型：从法链提供的文件元数据的一部分，用于记录文件的文件类型（如：DOC、PDF、MP4等）。文件类型以字符串类型在链上进行明文保存。
    * 文件尺寸：从法链提供的文件元数据的一部分，用于记录文件本体的尺寸。文件尺寸以整数类型在链上进行明文保存，单位为byte。
    * 文件Hash：从法链提供的文件元数据的一部分，用于记录文件本体的Hash值，即文件的指纹特征值。文件Hash以字符串类型在链上进行明文保存。
    * 文件所有者：记录文件所有者数字身份标识。文件拥有者拥有对文件的完整控制权：管理哪些数字身份标识可以读取文件本体和文件元数据内容；对文件本体和文件元数据内容进行版本更新；对文件进行删除；对文件进行追溯；文件验真等。文件所有者有权添加和删除文件分享者列表和文件读取者列表中的数字身份标识；当删除特定的分享者时，此共分享者所有授权的读取者应该一并被删除；如果某个数字身份标识同时被多人（所有者/分享者）授权拥有读取权限，则只有所有授权人将相应的读取权限删除，否则此数字身份标识会继续拥有读取权限。文件所有者数字身份标识以字符串类型在链上进行明文保存。
    * 文件分享者列表：记录所有拥有文件分享权限的数字身份标识名单。在文件分享者列表中的数字身份可以进行如下操作：向文件读取者列表中添加/删除数字身份标识的权利（只能删除自己授权的数字身份标识）；读取文件本体和文件元数据内容；对文件进行追溯；文件验真等。文件分享者列表中数字身份标识以字符串类型在链上进行明文保存。
    * 文件读取者列表：记录所有拥有获取文件权限的数字身份标识名单。在文件读取者列表中的数字身份可以进行如下操作：读取文件本体和文件元数据内容；对文件进行追溯；文件验真等。文件读取者列表中数字身份标识以字符串类型在链上进行明文保存。
    * 文件链上ID：记录文件的链上唯一标识，当使用此ID进行文件获取时，从法链会将最新版本的文件本体和文件元数据内容返回给调用者。文件链上ID以字符串类型在链上进行明文保存。
    * 文件当前版本ID：记录文件当前版本的唯一标识，便于快速定位特定版本的文件本体和文件元数据内容。文件当前版本ID以字符串类型在链上进行明文保存。
    * 当前版本提交时间戳：记录当前版本文件提交上链保存的时间。即通过调用前置节点上链交易提交接口，提交文件上链保存请求的时间。当前版本提交时间戳在链上明文保存。
    * 文件历史版本ID列表：记录文件所有版本的唯一标识，便于依据特定历史版本ID进行文件相应版本的历史信息获取。文件历史版本ID以字符串类型在链上进行明文保存。
    * 隶属业务域ID：记录文件所在业务域的身份标识。只有获得隶属业务域访问准入许可授权，方可接触此文件，但有没有文件操作能力，还需拥有文件的相应操作权限。

### 文件保存

将非结构化文件提交上链并保存于特定的链上业务域中。

  ***Java调用示例**

    
 ~~~java    
    log.debug("file start");
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
            log.info("1 发送交易成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件上链交易发送失败。
            log.info("1 发送交易失败:{}");
            countDownLatch.countDown();
        }
    
        @Override
        public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件上链交易执行成功，文件元数据上链保存，等待落块确认。
            //此时文件本体仍在上链处理中。
    
            log.info("2 确认落块成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件上链交易执行失败，文件元数据和文件本体均未上链保存。
            log.info("2 确认落块失败:{}");
            countDownLatch.countDown();
        }
    
        @Override
        public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
            FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
            log.info("文件ID"+txBlockData.getFileID());
            log.info("文件版本ID"+txBlockData.getVersionID());
            log.info("交易hash"+txBlockData.getTxHash());
            log.info("交易上链时间"+txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash"+txBlockData.getBlockHash());
            log.info("交易落块儿时间"+txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度"+txBlockData.getBlockHeight());
            log.info("当前链最高块儿"+txBlockData.getCurrentBlockHeight());
            //事件触发条件：在文件上链操作处理彻底完成，文件元数据和文件本体均成功上链保存
            log.info("4 文件上链成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
            status[0] =fUplStatus;
            countDownLatch.countDown();
        }
    
        @Override
        public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件本体上链保存因超过重复尝试次数而超时失败，文件上链交易请求需重新提交。
            log.info("4 文件上链失败:{}",fUplStatus);
            countDownLatch.countDown();
        }
    
        @Override
        public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件元数据成功上链保存，并获得落块确认。
            log.info("3  12块儿确认成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件上链交易落块确认失败，上链保存的文件元数据被链回滚。
            //事件触发后，会返回错误信息。文件上链交易请求需重新提交。
    
            log.info("3  12块儿确认失败:{}",fUplStatus);
            countDownLatch.countDown();
        }
    
        @Override
        public void onError(TxException e, Object context) {
            //事件触发条件：FileUpload调用出现异常。并返回异常信息。
            log.info("失败:{}",e);
        }
    
    
    };
    
    String path ="/Users/pan/Desktop/testv/未命名2.rtf.zip";
    fileUpload.setFile(new File(path));
    //文件副本数量
    fileUpload.setFileCopy(1);
    //文件分片数量
    fileUpload.setFileSlice(1);
    fileUpload.setFileName(fileUpload.getFile().getName());
    //文件描述
    fileUpload.setFileDescription("Description");
    //文件附属属性信息（json或xml）
    fileUpload.setFileProperty("Property");
    
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
    log.debug("file end");
 ~~~    

### 文件元数据更新

对特定的链上业务域中的文件进行元数据更新。

  ***Java调用示例**

    
 ~~~java    
    CountDownLatch countDownLatch = new CountDownLatch(1);
    final FileTxStatus[] status = {null};
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    //--创建前置节点对象
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
    FileMetaUpate fileMetaUpate = new FileMetaUpate(frontend,Config.BUSINESS_DOMAIN_ID) {
    
        @Override
        public void onTxSendSuccess(FileTxStatus fUplStatus, Object context) {
            log.info("1 发送交易成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
            countDownLatch.countDown();
            log.info("onTxSendFailure，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
            log.info("2 确认落块成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
            countDownLatch.countDown();
            log.info("onTxExecFailure，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
            FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
            log.info("文件ID"+txBlockData.getFileID());
            log.info("文件版本ID"+txBlockData.getVersionID());
            log.info("交易hash"+txBlockData.getTxHash());
            log.info("交易上链时间"+txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash"+txBlockData.getBlockHash());
            log.info("交易落块儿时间"+txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度"+txBlockData.getBlockHeight());
            log.info("当前链最高块儿"+txBlockData.getCurrentBlockHeight());
            //事件触发条件：在文件上链操作处理彻底完成，文件元数据和文件本体均成功上链保存
            log.info("4 文件上链成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
            status[0] =fUplStatus;
            countDownLatch.countDown();
        }
    
        @Override
        public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
            countDownLatch.countDown();
            log.info("onUploadFailure，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件元数据上链更新成功，并获得落块确认。
            log.info("4  12块儿确认成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件元数据更新上链交易落块确认失败，上链更新的文件元数据被链回滚。
            //事件触发后，会返回错误信息。文件元数据更新上链交易请求需重新提交。
    
            countDownLatch.countDown();
            log.info("onTxBlockCfmFailure，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onError(TxException e, Object context) {
            countDownLatch.countDown();
            log.info("异常，[{}]",e);
        }
    };
    //fileId 文件id
    String fileId="b568ef0ea7ddf3cb605f8e937f0cb803aef34ec4";
    fileMetaUpate.setFileID(fileId);
    //Config.OWNER_ADDRESS  --用户私钥地址
    fileMetaUpate.setOwnerID(Config.OWNER_ADDRESS);
    fileMetaUpate.setFileName("我修改的文件名");
    fileMetaUpate.setFileDescription("我修改的文件描述");
    fileMetaUpate.setFileProperty("我修改的附属属性");
    //Config.OWNER_PRIVATE_KEY   --用户私钥
    fileMetaUpate.submit(Config.OWNER_PRIVATE_KEY);
    countDownLatch.await();
    Assertions.assertEquals(1, status[0].getErrorCode());
 ~~~    

### 文件本体更新

对特定的链上业务域中的文件的本体进行更新。

  ***Java调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
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
            log.info("1 发送交易成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件更新上链交易发送失败。
            //事件触发后，会返回错误信息。
    
            log.info("1 发送交易失败:{}",fUplStatus);
            cdl.countDown();
        }
    
        @Override
        public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件更新上链交易执行成功，更新的文件元数据上链保存，等待落块确认。
            //此时文件本体仍在上链处理中。
    
            log.info("2 确认落块成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件更新上链交易执行失败，更新的文件元数据和文件本体均未上链保存。
            //事件触发后，会返回错误信息。文件更新上链交易请求需重新提交。
            log.info("2 确认落块失败:{}",fUplStatus);
            cdl.countDown();
        }
    
        @Override
        public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
            FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
            log.info("文件ID"+txBlockData.getFileID());
            log.info("文件版本ID"+txBlockData.getVersionID());
            log.info("交易hash"+txBlockData.getTxHash());
            log.info("交易上链时间"+txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash"+txBlockData.getBlockHash());
            log.info("交易落块儿时间"+txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度"+txBlockData.getBlockHeight());
            log.info("当前链最高块儿"+txBlockData.getCurrentBlockHeight());
            //事件触发条件：在文件上链操作处理彻底完成，文件元数据和文件本体均成功上链保存
            //事件触发条件：在文件更新操作处理彻底完成，更新的文件元数据和文件本体均成功上链保存。
            status[0] =fUplStatus;
            cdl.countDown();
        }
    
        @Override
        public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件本体上链保存因超过重复尝试次数而超时失败，文件更新上链交易请求需重新提交。
            log.info("3 文件上链失败:{}",fUplStatus);
        }
    
        @Override
        public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：更新的文件元数据成功上链保存，并获得落块确认。
            //此时文件本体仍在上链处理中。
    
            log.info("4  12块儿确认成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件更新上链交易落块确认失败，上链保存的文件元数据被链回滚。
            //事件触发后，会返回错误信息。文件更新上链交易请求需重新提交。
    
            log.info("4  12块儿确认失败:{}",fUplStatus);
            cdl.countDown();
        }
    
        @Override
        public void onError(TxException e, Object context) {
            //事件触发条件：FileModify调用出现异常。并返回异常信息。
            log.info("异常，[{}]",e);
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
    fileModify.setFileDescription("123");
    //文件附属属性信息（json或xml）
    fileModify.setFileProperty("123");
    //Config.OWNER_ADDRESS  --用户私钥对应的地址
    String[] strArray={Config.OWNER_ADDRESS};
    fileModify.setOwners(strArray);
    fileModify.setReaders(strArray);
    fileModify.setSharers(strArray);
    //Config.OWNER_ADDRESS  --用户私钥对应的地址
    fileModify.setOwnerID(Config.OWNER_ADDRESS);
    //FILEID   --需要更改的链Id
    String FILEID="b568ef0ea7ddf3cb605f8e937f0cb803aef34ec4";
    fileModify.setFileID(FILEID);
    //进行文件元数据和本体上链更新操作提交
    fileModify.submit(Config.OWNER_PRIVATE_KEY);
    cdl.await(5,TimeUnit.MINUTES);
    Assertions.assertTrue(status[0].getErrorCode()==1);
 ~~~    

### 文件授权

#### 授权

将特定数字身份标识添加至链上业务域中特定文件的读取者/分享者/所有者权限列表中，使其拥有文件的读取/分享/所有者权限。

拥有读取权限的数字身份可以进行如下操作：读取文件本体和元数据内容；对文件进行追溯；文件验真等。

拥有分享权限的数字身份可以进行如下操作：向文件读取者列表中添加/删除数字身份标识的权利（只能删除自己授权的数字身份标识）；读取文件本体和元数据内容；对文件进行追溯；文件验真等。

拥有所有者权限的数字身份可以进行如下操作：读取文件本体和元数据内容；对文件进行追溯；文件验真；文件更新；文件元数据更新；文件授权；文件删除等。

  ***Java调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
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
            log.info("1 发送交易成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：文件授权上链交易发送失败。
            //事件触发后，会返回错误信息。
    
            log.info("1 发送交易失败");
        }
    
        @Override
        public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件授权上链交易执行成功，等待落块确认。
            log.info("2 确认落块成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：文件授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效。
            //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
            log.info("2 确认落块失败");
        }
    
        @Override
        public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：在文件上链操作处理彻底完成，文件授权成功
    
            log.info("3 文件上链成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //文件授权失败
            log.info("3 文件上链失败");
        }
    
        @Override
        public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
            FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
            log.info("文件ID"+txBlockData.getFileID());
            log.info("文件版本ID"+txBlockData.getVersionID());
            log.info("交易hash"+txBlockData.getTxHash());
            log.info("交易上链时间"+txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash"+txBlockData.getBlockHash());
            log.info("交易落块儿时间"+txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度"+txBlockData.getBlockHeight());
            log.info("当前链最高块儿"+txBlockData.getCurrentBlockHeight());
            status[0] =fUplStatus;
            cdl.countDown();
            //事件触发条件：文件授权上链交易执行成功，并获得落块确认。
            log.info("4  12块儿确认成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：文件授权上链交易执行失败，上链保存的文件授权被链回滚。
            //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
            log.info("4  12块儿确认失败");
        }
    
        @Override
        public void onError(TxException e, Object context) {
            cdl.countDown();
            //事件触发条件：FileAuthorise调用出现异常。并返回异常信息。
            log.info("异常，[{}]",e);
        }
    };
    // Config.FILE_ID   --文件ID
    fileAuthorise.setFileID(Config.FILE_ID);
    //Config.OWNER_ADDRESS  --用户私钥对应的地址
    fileAuthorise.setGrantorID(Config.OWNER_ADDRESS);
    //authorise  --被授权的用户（数组）
    String[] authorise={"ce15afb7f07ecd164ce9e581e2bdd1c19c130401"};
    //授权
    fileAuthorise.addOwners(authorise);
    fileAuthorise.setReaderIDs(authorise);
    fileAuthorise.setSharerIDs(authorise);
    //--赋值提交上链交易的授权者数字身份私钥（此范例使用文件所有者的数字身份标识）
    //Config.OWNER_ADDRESS  --用户私钥
    fileAuthorise.submit(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assertions.assertTrue(status[0].getErrorCode()==1);
 ~~~    

#### 取消授权

删除链上业务域中特定文件的读取/分享/所有者权限列表中的特定数字身份标识，使其失去文件的读取/分享/所有者权限。

![](/17731d3949f58e97eac8d5a844e0b72e.png)

  * 文件所有者能够删除所有分享者和所有由所有者直接授权的读取者。
  * 文件分享者只能删除自己授权的读取者。
  ***Java调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
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
            log.info("1 发送交易成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：文件授权上链交易发送失败。
            //事件触发后，会返回错误信息。
    
            log.info("1 发送交易失败");
        }
    
        @Override
        public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件授权上链交易执行成功，等待落块确认。
            log.info("2 确认落块成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：文件授权上链交易执行失败，对指定数字身份的相应权限授权未在链上生效。
            //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
            log.info("2 确认落块失败");
        }
    
        @Override
        public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：在文件上链操作处理彻底完成，文件授权成功
    
            log.info("3 文件上链成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //文件授权失败
            log.info("3 文件上链失败");
        }
    
        @Override
        public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
            FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
            log.info("文件ID"+txBlockData.getFileID());
            log.info("文件版本ID"+txBlockData.getVersionID());
            log.info("交易hash"+txBlockData.getTxHash());
            log.info("交易上链时间"+txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash"+txBlockData.getBlockHash());
            log.info("交易落块儿时间"+txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度"+txBlockData.getBlockHeight());
            log.info("当前链最高块儿"+txBlockData.getCurrentBlockHeight());
            status[0] =fUplStatus;
            cdl.countDown();
            //事件触发条件：文件授权上链交易执行成功，并获得落块确认。
            log.info("4  12块儿确认成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：文件授权上链交易执行失败，上链保存的文件授权被链回滚。
            //事件触发后，会返回错误信息。文件授权上链交易请求需重新提交。
            log.info("4  12块儿确认失败");
        }
    
        @Override
        public void onError(TxException e, Object context) {
            cdl.countDown();
            //事件触发条件：FileAuthorise调用出现异常。并返回异常信息。
            log.info("异常，[{}]",e);
        }
    };
    
     //取消授权
    // Config.FILE_ID   --文件ID
    fileAuthorise.setFileID(Config.FILE_ID);
    //Config.OWNER_ADDRESS  --用户私钥对应的地址
    fileAuthorise.setGrantorID(Config.OWNER_ADDRESS);
    //authorise  --被取消授权的用户（数组）
    String[] authorise={"ce15afb7f07ecd164ce9e581e2bdd1c19c130401"};
    fileAuthorise.removeReaders(authorise);
    //Config.OWNER_ADDRESS  --用户私钥
    fileAuthorise.submit(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assertions.assertTrue(status[0].getErrorCode()==1);
 ~~~java    

#### 权限列表获取

获取链上业务域中特定文件的权限列表信息，包括读取/分享/所有者权限列表。

  * 文件所有者有权获取完整的所有者列表和所有者分别授权的读取者列表；完整的分享者列表和分享者分别授权的读取者列表。
  * 文件分享者有权获取自己授权的读取者列表。
  * 文件读取者无权获取文件权限列表。
  ***Java调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
    final FileRightsFetchStatus[] status = {null};
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    //--创建前置节点对象
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL);
    FileRightsFetch FileAuthorise = new FileRightsFetch(frontend, Config.BUSINESS_DOMAIN_ID) {
        @Override
        public void onSuccess(FileRightsFetchStatus commonStatus, Object context) {
            status[0] = commonStatus;
            cdl.countDown();
    
            FileRightsFetchStatus.RightsInfo fileRights = commonStatus.getFileRights();
            for (int i = 0; i < fileRights.getOwners().size(); i++) {
                log.info("结构数据所有者身份标识: " + fileRights.getOwners().get(i));
            }
            //结构数据所有者所授权的分享者列表
            List<FileRightsFetchStatus.Readers> readersBySharer = commonStatus.getFileRights().getReadersBySharer();
            for (int j = 0; j < readersBySharer.size(); j++) {
                log.info("有授权分享者的结构数据所有者数字身份标识=" + readersBySharer.get(j).getGrantorID());
                for (int n = 0; n < readersBySharer.get(j).getReaders().size(); n++) {
                    log.info("当前结构数据所有者授权的分享者数字身份标识=" + readersBySharer.get(j).getReaders().get(n));
                }
            }
            //事件触发条件：在"文件权限列表获取"链上操作处理彻底完成，文件权限列表信息已成功下载。
            log.info("onSuccess[{}]", commonStatus);
        }
    
        @Override
        public void onFailure(FileRightsFetchStatus commonStatus, Object context) {
            cdl.countDown();
            //事件触发条件：在"文件权限列表获取"链上操作处理失败，文件权限列表信息未被下载。
            log.info("onSuccess[{}]", commonStatus);
        }
    
        @Override
        public void onError(FetchException e, Object context) {
            cdl.countDown();
            //事件触发条件：FileRightsFetch调用出现异常。并返回异常信息。
            log.info("onSuccess[{}]", e);
        }
    };
    // Config.FILE_ID   --文件ID
    FileAuthorise.setFileID(Config.FILE_ID);
    //Config.OWNER_ADDRESS  --用户私钥
    FileAuthorise.query(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assertions.assertTrue(status[0].getErrorCode() == 1);
 ~~~    

### 文件元数据获取

从指定的业务域中获取指定文件的指定版本的元数据信息。

被设置为删除状态的文件元数据是可以被读取到的，只不过状态被标记为删除。

  ***Java调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
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
            log.info("文件链上ID:{}", fileMeta.getFileID());
            log.info("文件当前版本ID:{}", fileMeta.getVersionID());
            log.info("文件名称:{}", fileMeta.getFileName());
            log.info("文件扩展名:{}", fileMeta.getFileSuffix());
            log.info("文件尺寸，单位为Byte:{}", fileMeta.getFileSize());
            log.info("文件描述:{}", fileMeta.getFileDescription());
            log.info("文件附属属性:{}", fileMeta.getFileProperty());
            log.info("文件副本数量:{}", fileMeta.getFileCopy());
            log.info("文件切片数量:{}", fileMeta.getFileSlice());
            log.info("文件本体指纹特征值:{}", fileMeta.getFileDigest());
            log.info("文件上链保存时间，datetime对应的int64类型:{}", fileMeta.getUploadTime());
            log.info("文件的删除状态，取值1=删除；0=有效:{}", fileMeta.getDelStatus());
            log.info("当前版本元数据的生成时间戳，datetime对应的int64类型:{}", fileMeta.getMetaTimestamp());
            log.info("签名的信息:{}", fileMeta.getTcVerifyFile());
            log.info("自动核验 任务记录,key:callId:{}", fileMeta.getVerifyRecs());
    
            //事件触发条件：在"文件元数据获取"链上操作处理彻底完成，文件元数据已成功下载。
            status[0] = commonStatus;
            cdl.countDown();
    
            log.info("onSuccess，返回信息[{}]", commonStatus);
        }
    
        @Override
        public void onFailure(FileMetaFetchStatus commonStatus, Object context) {
            //事件触发条件：在"文件元数据获取"链上操作处理失败，文件元数据未被下载。
            log.info("onFailure，返回信息[{}]", commonStatus.toString());
        }
    
        @Override
        public void onError(FetchException e, Object context) {
            //事件触发条件：FileMetaFetch调用出现异常。并返回异常信息。
            log.info("onError，返回信息[{}]", e.toString());
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
 ~~~    

### 文件本体获取

下载特定的链上业务域中的文件的文件本体。

  ***Java调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
    final FileFetchStatus[] status = {null};
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    //--创建前置节点对象
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL);
    FileFetch fileFetch = new FileFetch(frontend, Config.BUSINESS_DOMAIN_ID) {
    
        @Override
        public void onSuccess(FileFetchStatus commonStatus, Object context) {
            log.info("文件Body:{}", commonStatus.getFileBody());
            log.info("错误码:{}", commonStatus.getErrorCode());
            log.info("信息:{}", commonStatus.getMessage());
            status[0] = commonStatus;
            cdl.countDown();
    
        }
    
        @Override
        public void onFailure(FileFetchStatus commonStatus, Object context) {
            cdl.countDown();
            log.info("文件下载失败，返回信息[{}]", commonStatus.toString());
        }
    
        @Override
        public void onError(FetchException e, Object context) {
            cdl.countDown();
            log.info("文件下载异常，返回信息[{}]", e);
        }
    };
    // Config.FILE_ID   --文件ID
    fileFetch.setFileID(Config.FILE_ID);
    // fileFetch.setVersionID("8ecc143f9740636b4e525d6497f9e26e332362998bb2d91d11a1724a0f2dd11efc");
    fileFetch.setFilePath("D:\\test1");
    //Config.OWNER_ADDRESS  --用户私钥对应的地址
    fileFetch.setFetcherID(Config.OWNER_ADDRESS);
    //Config.OWNER_ADDRESS  --用户私钥
    fileFetch.query(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assertions.assertTrue(status[0].getErrorCode() == 1);
 ~~~    

### 文件删除

所有者对指定业务域中的特定文件设置为删除状态。

文件一旦为设置为删除状态，特定文件将无法再继续进行"文件本体更新"和"文件元数据更新"。

  ***Java调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
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
            log.info("1 发送交易成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件删除上链交易发送失败。
            //事件触发后，会返回错误信息。
            log.info("1 发送交易失败");
        }
    
        @Override
        public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件删除上链交易执行成功，等待落块确认。
            log.info("2 确认落块成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件删除上链交易执行失败，删除状态变更未在链上生效。
            //事件触发后，会返回错误信息。删除状态变更上链交易请求需重新提交。
    
            log.info("2 确认落块失败");
        }
    
        @Override
        public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
            log.info("3 文件上链成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
            log.info("3 文件上链失败");
        }
    
        @Override
        public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件删除上链交易执行成功，并获得落块确认。
            FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
            log.info("文件ID" + txBlockData.getFileID());
            log.info("文件版本ID" + txBlockData.getVersionID());
            log.info("交易hash" + txBlockData.getTxHash());
            log.info("交易上链时间" + txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash" + txBlockData.getBlockHash());
            log.info("交易落块儿时间" + txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度" + txBlockData.getBlockHeight());
            log.info("当前链最高块儿" + txBlockData.getCurrentBlockHeight());
            status[0] = fUplStatus;
            cdl.countDown();
            //事件触发条件：文件授权上链交易执行成功，并获得落块确认。
            log.info("4  12块儿确认成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：文件删除上链交易落块确认失败，删除状态变更被链回滚。
            //事件触发后，会返回错误信息。文件删除上链交易请求需重新提交。
            log.info("4  12块儿确认失败");
        }
    
        @Override
        public void onError(TxException e, Object context) {
            //事件触发条件：FileDelete调用出现异常。并返回异常信息。
            log.info("失败");
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
 ~~~    

### 文件本体清空

文件本体清空是文件所有者对链上业务域中特定文件的所有（版本）文件本体从链上彻底清空的系列操作。文件本体清空主要包含2个步骤：文件本体清空申请和文件本体清空审批。

链上文件如需进行文件本体清空，相应的链上文件必须被FileDelete设置为删除状态；随后文件所有者向区块链提交文件本体清空申请，且审批人列表中必须包含全部所有者和任意的非所有者数字身份标识；在所有清空审批人列表中审批人均同意清空后，文件的所有版本的文件本体将从区块链节点网络中彻底删除；被文件本体清空的文件的元数据依然会保留在区块链系统中，便于事后审计。

#### 清空申请

链上业务域中特定文件的所有者向区块链提交文件本体清空申请，等待后续清空审批确认。提交文件本体清空申请时会提交清空审批人列表，指定哪些审批人要参与清空审批。

  ***Java调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
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
            log.info("1 发送交易成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：清空申请上链交易发送失败。
            //事件触发后，会返回错误信息。
            log.info("1 发送交易失败");
        }
    
        @Override
        public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：清空申请上链交易执行成功，等待落块确认。
            log.info("2 确认落块成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：清空申请上链交易执行失败，清空审批人名单未在链上生效。
            //事件触发后，会返回错误信息。清空申请上链交易请求需重新提交。
            log.info("2 确认落块失败");
        }
    
        @Override
        public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
            log.info("3 文件上链成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            log.info("3 文件上链失败");
        }
    
        @Override
        public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：清空申请上链交易执行成功，并获得落块确认。
            FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
            log.info("文件ID" + txBlockData.getFileID());
            log.info("文件版本ID" + txBlockData.getVersionID());
            log.info("交易hash" + txBlockData.getTxHash());
            log.info("交易上链时间" + txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash" + txBlockData.getBlockHash());
            log.info("交易落块儿时间" + txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度" + txBlockData.getBlockHeight());
            log.info("当前链最高块儿" + txBlockData.getCurrentBlockHeight());
            status[0] = fUplStatus;
            cdl.countDown();
    
            log.info("4  12块儿确认成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：清空申请上链交易落块确认失败，清空申请被链回滚。
            //事件触发后，会返回错误信息。清空申请上链交易请求需重新提交。
            log.info("4  12块儿确认失败");
        }
    
        @Override
        public void onError(TxException e, Object context) {
            cdl.countDown();
            //事件触发条件：FileEmptyApply调用出现异常。并返回异常信息。
            log.info("异常，[{}]",e);
        }
    };
    // Config.FILE_ID  --指定要进行清空申请的链上文件的文件链上ID。
    fileEmptyApply.setFileID(Config.FILE_ID);
    //Config.OWNER_ADDRESS  --用户私钥对应的地址
    fileEmptyApply.setOwnerID(Config.OWNER_ADDRESS);
    String[] redarry={"6b637aab70e47e1a54329bae01a69ca54a19e0f2","566ce0689fd23cd12be7de0c946b1a83e52393d4","3b10441f366cbe9baa54f39bee98faaf861f62bb"};
    //设置参与清空审批的数字身份标识列表
    fileEmptyApply.setApprovers(redarry);
    //进行文件清空申请上链操作提交
    // Config.OWNER_PRIVATE_KEY  --赋值文件所有者数字身份私钥（即上链交易提交人）
    fileEmptyApply.submit(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assertions.assertTrue(status[0].getErrorCode() == 1);
 ~~~    

#### 清空审批

在清空审批人列表中的审批人通过调用清空审批接口向区块链系统提交审批意见（同意/拒绝）。

  ***调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
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
            log.info("1 发送交易成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxSendFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：清空审批上链交易发送失败。
            //事件触发后，会返回错误信息。
            log.info("1 发送交易失败");
        }
    
        @Override
        public void onTxExecSuccess(FileTxStatus fUplStatus, Object context) {
            //事件触发条件：清空审批上链交易执行成功，等待落块确认。
            log.info("2 确认落块成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxExecFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：清空审批上链交易执行失败，清空审批结果未在链上生效。 
            //事件触发后，会返回错误信息。清空审批上链交易请求需重新提交。
            log.info("2 确认落块失败");
        }
    
        @Override
        public void onUploadAccomplish(FileTxStatus fUplStatus, Object context) {
            log.info("3 文件上链成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onUploadFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            log.info("3 文件上链失败");
        }
    
        @Override
        public void onTxBlockConfirm(FileTxStatus fUplStatus, Object context) {
            FileTxStatus.FileTxBlockInfo txBlockData = fUplStatus.getTxBlockData();
            log.info("文件ID" + txBlockData.getFileID());
            log.info("文件版本ID" + txBlockData.getVersionID());
            log.info("交易hash" + txBlockData.getTxHash());
            log.info("交易上链时间" + txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash" + txBlockData.getBlockHash());
            log.info("交易落块儿时间" + txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度" + txBlockData.getBlockHeight());
            log.info("当前链最高块儿" + txBlockData.getCurrentBlockHeight());
            status[0] = fUplStatus;
            cdl.countDown();
            //事件触发条件：清空审批上链交易执行成功，并获得落块确认。
            log.info("4  12块儿确认成功，返回信息为[{}]", JsonSerializer.formatToString(fUplStatus));
        }
    
        @Override
        public void onTxBlockCfmFailure(FileTxStatus fUplStatus, Object context) {
            cdl.countDown();
            //事件触发条件：清空审批上链交易落块确认失败，清空审批被链回滚。
            //事件触发后，会返回错误信息。清空审批上链交易请求需重新提交。
            log.info("4  12块儿确认失败");
        }
    
        @Override
        public void onError(TxException e, Object context) {
            cdl.countDown();
            //事件触发条件：FileEmptyApprove调用出现异常。并返回异常信息。
            log.info("异常，[{}]",e);
        }
    };
    //Config.FILE_ID   --指定要进行文件本体清空审批的链上文件的文件链上ID。
    fileEmptyApprove.setFileID(Config.FILE_ID);
    
    //用新加同意审核的人address
    fileEmptyApprove.setApproverID("05dba391fa240bf1158fdc7c34d06e2b4fa4d3fc");
    //是否同意删除  1 同意  2 拒绝
    fileEmptyApprove.setReply(1);
    //用新加同意审核的人私钥  （申请审批需要三个人以上，这个方法也要执行三次以上）
    fileEmptyApprove.submit("7923ced7879918f7ee8e531e56fa7b1daf57473ac511f987bacd782152bf7080");
    cdl.await();
    Assertions.assertTrue(status[0].getErrorCode() == 1);
 ~~~    

### 文件验真

获取指定业务域中指定文件的指定版本的文件本体指纹特征值，以便和自己本地拥有的文件进行一致性验证。任何人都有权获取，但调用的业务系统身份标识需要获得相应业务域的访问许可授权。

  ***Java调用示例**

    
 ~~~java    
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
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
    String fileDigest="99efff17767e7d2395bac1defd90e2e9acb7ab1d923bd83d59ab50fa7a000a81";
    fileFetch.setFileDigest(fileDigest);
    FileDigestCheckStatus status =fileFetch.query();
    log.info("MDcheck 结果:{}",status);
    Thread.sleep(3000);
 ~~~    

### 文件追溯

依据文件在链上的历史版本列表信息，遍历链上文件的不同版本的元数据和文件本体内容，即查看链上文件的历史演变过程。

  ***Java调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
    final FileVersionsFetchStatus[] status = {null};
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    //--创建前置节点对象
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
    FileVersionsFetch fileFetch = new FileVersionsFetch(frontend,Config.BUSINESS_DOMAIN_ID){
    
        @Override
        public void onSuccess(FileVersionsFetchStatus commonStatus, Object context) {
            List<FileVersionsFetchStatus.FileVersionInfo> versions = commonStatus.getVersions();
            for (int i=0; i< versions.size(); i++) {
                log.info("文件版本标识:{} " + versions.get(i).getVersionID());
                log.info("文件版本的生成时间戳:{}" + versions.get(i).getTimestamp());
            }
            log.info("错误码:{} " +  commonStatus.getErrorCode());
            log.info("返回信息:{} " + commonStatus.getMessage());
            status[0] = commonStatus;
            //事件触发条件：在"获取文件版本列表"成功下载。
            log.info("onSuccess，返回信息为[{}]", JsonSerializer.formatToString(commonStatus));
            cdl.countDown();
        }
    
        @Override
        public void onFailure(FileVersionsFetchStatus commonStatus, Object context) {
            //事件触发条件："文件版本列表获取"链上操作处理失败，文件版本列表未被下载。
            log.info("onFailure，返回信息为[{}]", JsonSerializer.formatToString(commonStatus));
            cdl.countDown();
        }
    
        @Override
        public void onError(FetchException e, Object context) {
            //事件触发条件：FileVersionsFetch调用出现异常。并返回异常信息。
            log.info("onError，返回信息为[{}]", JsonSerializer.formatToString(e));
            cdl.countDown();
        }
    };
    
    //Config.FILE_ID  --指定获取文件版本列表的链上文件的文件链上ID。
    fileFetch.setFileID(Config.FILE_ID);
    //        fileFetch.setFetcherID("46f443513fcb863a77d736554146a98bec8826e0");
    //进行"文件版本列表获取"上链操作提交
    //Config.OWNER_ADDRESS  --用户私钥
    fileFetch.query(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assertions.assertTrue(status[0].getErrorCode() == 1);
 ~~~    