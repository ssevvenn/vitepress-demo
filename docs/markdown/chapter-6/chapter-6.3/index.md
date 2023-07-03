---
prev: false
next: false
---
## 结构数据操作

从法链提供结构数据上链保存及链上全生命周期管理，从而利用区块链的防篡改、防灭失等技术特性，实现结构数据的长久保真。链外应用系统通过调用前置节点服务器上的一系列结构数据链上操作接口，实现结构数据的上链保存、可信共享、删除、版本追溯、链上数据验真等功能。

结构数据保存于从法链特定业务域中，并被从法链利用数据加密、权限控制、访问准入等技术手段进行全方位隐私保护，从而确保链上数据的安全性。只有获得合法权限方可被区块链引擎允许对相应的链上保存的结构数据进行相应的链上操作。换句话说，虽然结构数据保存在从法链的各个节点服务器上，但任何人在未获得授权的情况下，均无法获取链上保存的结构够数据的真实内容，即使通过节点服务器存储进行强行获取。

  ***链上数据结构**

![](/e12ba4af993998183e24057bc31acbdf.png)

  * 结构数据体：用于保存结构数据具体内容。结构数据体以字符串类型在链上进行保存，建议用JSON/XML格式构建结构数据，并序列化成字符串；结构数据单体尺寸上限为8MB；结构数据体内容被从法链加密保存。
    * 附属属性（可选）：从法链提供附属属性，用于描述结构数据的特征属性。附属属性以字符串类型在链上进行保存，建议用JSON/XML格式构建，并序列化成字符串；附属属性单体尺寸上限为1MB；附属属性内容被从法链加密保存。
    * 数据所有者：记录结构数据所有者数字身份标识。数据拥有者拥有对结构数据的完整控制权：管理哪些数字身份标识可以读取结构数据体和附属属性内容；对结构数据体或附属属性内容进行版本更新；对结构数据进行废除；对结构数据进行追溯；结构数据验真等。数据所有者有权添加和删除数据分享者列表和数据读取者列表中的数字身份标识；当删除特定的分享者时，此分享者所有授权的读取者会一并被删除；如果某个数字身份标识同时被多人（所有者/分享者）授权拥有读取权限，则只有所有授权人将相应的读取权限删除，否则此数字身份标识会继续拥有读取权限。数据所有者数字身份标识以字符串类型在链上进行明文保存。
    * 数据分享者列表：记录所有拥有数据分享权限的数字身份标识名单。在数据分享者列表中的数字身份可以进行如下操作：向数据读取者列表中添加/删除数字身份标识的权利（只能删除自己授权的数字身份标识）；读取结构数据体和附属属性内容；对结构数据进行追溯；结构数据验真等。数据分享者列表中数字身份标识以字符串类型在链上进行明文保存。
    * 数据读取者列表：记录所有拥有读取结构数据权限的数字身份标识名单。在数据读取者列表中的数字身份可以进行如下操作：读取结构数据体和附属属性内容；对结构数据进行追溯；结构数据验真等。数据读取者列表中数字身份标识以字符串类型在链上进行明文保存。
    * 数据链上ID：记录结构数据的链上唯一标识，当使用此ID进行数据获取时，从法链会将最新版本的结构数据内容返回给调用者。数据链上ID以字符串类型在链上进行明文保存。
    * 数据当前版本ID：记录结构数据当前版本的唯一标识，便于快速定位特定版本的结构数据内容。数据当前版本ID以字符串类型在链上进行明文保存。
    * 当前版本提交时间戳：记录当前版本结构数据提交上链保存的时间。即通过调用前置节点上链交易提交接口，提交数据上链保存请求的时间。当前版本提交时间戳在链上明文保存。
    * 数据历史版本ID列表：记录结构数据所有版本的唯一标识，便于依据特定历史版本ID进行结构数据相应版本的历史信息获取。数据历史版本ID以字符串类型在链上进行明文保存。
    * 隶属业务域ID：记录结构数据所在业务域的身份标识。只有获得隶属业务域访问准入许可授权，方可接触此结构数据，但有没有结构数据操作能力，还需拥有结构数据的相应操作权限。

### 数据保存

将结构数据提交到指定的业务域中进行上链创建保存。

  ***Java调用示例**

    
 ~~~java    
    CountDownLatch cdl = new CountDownLatch(1);
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL);
    //        RandomKeyPairPool randomKeyPairPool = new RandomKeyPairPool(1);
    //        frontend.setKeyPairPool(randomKeyPairPool);
    final DataTxStatus[] dts = {new DataTxStatus()};
    DataUpload DataUpload = new DataUpload(frontend, Config.BUSINESS_DOMAIN_ID) {
    
        @Override
        public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：结构数据上链保存成功，并获得落块确认。
            log.info("onTxBlockConfirm，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
            cdl.countDown();
            dts[0] = dUploadStatus;
            DataTxStatus.DataTxBlockInfo txBlockData = dUploadStatus.getTxBlockData();
    
            log.info("结构化数据唯一ID"+txBlockData.getDataID());
            log.info("结构化数据ID"+txBlockData.getVersionID());
            log.info("交易hash"+txBlockData.getTxHash());
            log.info("交易上链时间"+txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash"+txBlockData.getBlockHash());
            log.info("交易落块儿时间"+txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度"+txBlockData.getBlockHeight());
            log.info("当前链最高块儿"+txBlockData.getCurrentBlockHeight());
            log.info("状态"+dUploadStatus.getStatus());
            log.info("错误码"+dUploadStatus. getErrorCode());
            log.info("信息"+dUploadStatus. getMessage());
        }
    
        @Override
        public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：结构数据保存上链交易落块确认失败，上链保存的结构数据被链回滚。
            //事件触发后，会返回错误信息。结构数据保存上链交易请求需重新提交。
    
            cdl.countDown();
            log.info("onTxBlockCfmFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：结构数据保存上链交易发送成功，等待区块链执行处理。
            log.info("onTxSendSuccess，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：结构数据保存上链交易发送失败。
            cdl.countDown();
            log.info("onTxSendFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
    
        }
    
        @Override
        public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：结构数据保存上链交易执行成功，结构数据上链保存成功，等待落块确认
            log.info("onTxExecSuccess，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
    //                dts[0] = dUploadStatus;
    //                cdl.countDown();
        }
    
        @Override
        public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：结构数据保存上链交易执行失败，结构数据未上链保存。
            cdl.countDown();
            log.info("onTxExecFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onError(TxException e, Object context) {
            //事件触发条件：DataUpload调用出现异常。并返回异常信息。
            cdl.countDown();
            log.info("onError，返回信息为[{}]", JsonSerializer.formatToString(e));
        }
    };
    //上链保存的结构数据内容
    String data ="{\n"
        + "\"受援人姓名\":\"李四\",\n"
        + "\"证件类型\":\"身份证\",\n"
        + "\"证件号码\":\"310104198707148901\",\n"
        + "\"通知函号\":\"上海刑援指字[2022]第（108）号\",\n"
        + "\"通知机关名称\":\"上海华兴律师事务所\",\n"
        + "\"日期\":\"2022年3月1日\",\n"
        + "\"案由\":\"离婚纠纷\",\n"
        + "\"通知原因\":\"当事人因经济原因无法聘请律师\",\n"
        + "\"承办律师姓名\":\"张三\",\n"
        + "\"承办律师执业证号\":\"111022008100000031\",\n"
        + "\"律师事务所名称\":\"上海华兴律师事务所\",\n"
        + "\"时间戳\":\"2022年3月1日 13:49:51\"\n"
        + "}";
    
    DataUpload.setDataContent(new StringBuilder().append(data));
    
    DataUpload.setDataProperty(new StringBuilder().append("DataProperty"));
    
    Client.RoleItem.Builder roleItem1 = Client.RoleItem.newBuilder();
    //Config.MANAGER_ADDRESS --管理者地址
    roleItem1.setAddr(Config.MANAGER_ADDRESS);
    
    DataUpload.setOwners(new Client.RoleItem[]{roleItem1.build()});
    DataUpload.setReaders(new Client.RoleItem[]{roleItem1.build()});
    DataUpload.setSharers(new Client.RoleItem[]{roleItem1.build()});
    //Config.OWNER_PRIVATE_KEY  --用户私钥
    DataUpload.submit(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assert.assertEquals(dts[0].getErrorCode(),1);
 ~~~    

### 数据更新

所有者对指定业务域中的结构数据的结构数据内容和附属属性内容进行更新。

结构数据更新时需将结构数据和附属属性内容一并提交。举例说明：

![](/247518f8a66c03bd8c54817a7f28aaca.png)

  ***Java调用示例**

    
 ~~~java    
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    CountDownLatch cdl = new CountDownLatch(1);
    final DataTxStatus[] dts = {new DataTxStatus()};
    
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
    DataModify DataUpload = new DataModify(frontend,Config.BUSINESS_DOMAIN_ID) {
    
        @Override
        public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxBlockConfirm，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
            //事件触发条件：更新的结构数据成功上链保存，并获得落块确认。
            cdl.countDown();
            dts[0] = dUploadStatus;
            DataTxStatus.DataTxBlockInfo txBlockData = dUploadStatus.getTxBlockData();
    
            log.info("结构化数据唯一ID"+txBlockData.getDataID());
            log.info("结构化数据ID"+txBlockData.getVersionID());
            log.info("交易hash"+txBlockData.getTxHash());
            log.info("交易上链时间"+txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash"+txBlockData.getBlockHash());
            log.info("交易落块儿时间"+txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度"+txBlockData.getBlockHeight());
            log.info("当前链最高块儿"+txBlockData.getCurrentBlockHeight());
            log.info("状态"+dUploadStatus.getStatus());
            log.info("错误码"+dUploadStatus. getErrorCode());
            log.info("信息"+dUploadStatus. getMessage());
    
        }
    
        @Override
        public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：结构数据更新上链交易落块确认失败，上链更新的结构数据被链回滚。
            //事件触发后，会返回错误信息。结构数据更新上链交易请求需重新提交。
            cdl.countDown();
            log.info("onTxBlockCfmFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：结构数据更新上链交易发送成功，等待区块链执行处理。
            log.info("onTxSendSuccess，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
            cdl.countDown();
            //事件触发条件：结构数据更新上链交易发送失败。
            log.info("onTxSendFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：结构数据更新上链交易执行成功，结构数据上链更新成功，等待落块确认。
            log.info("onTxExecSuccess，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
            cdl.countDown();
            //事件触发条件：结构数据更新上链交易执行失败，结构数据未上链保存。
            //事件触发后，会返回错误信息。结构数据更新上链交易请求需重新提交。
            log.info("onTxExecFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onError(TxException e, Object context) {
            cdl.countDown();
            //事件触发条件：DataModify调用出现异常。并返回异常信息。
            log.info("onError，返回信息为[{}]", JsonSerializer.formatToString(e));
        }
    };
    // Config.DATA_ID --数据ID
    DataUpload.setDataID(Config.DATA_ID);
    //要更新的结构数据内容
    DataUpload.setDataContent(new StringBuilder("爱丽丝1"));
    // 要更新结构数据的附属属
    DataUpload.setDataProperty( new StringBuilder("sdfsafds"));
    //进行结构数据更新上链操作提交
    //Config.OWNER_PRIVATE_KEY --赋值结构数据所有者数字身份私钥，ownerID对应的私钥
    DataUpload.submit(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assert.assertEquals(dts[0].getErrorCode(),1);
 ~~~    

### 数据授权

#### 授权

所有者授权一组数字身份对指定业务域中的结构数据的拥有读取/所有者权限。

拥有读取权限的数字身份可以进行如下操作：读取结构数据体和附属属性内容；对结构数据进行追溯；结构数据验真等。

拥有所有者权限的数字身份可以进行如下操作：读取结构数据体和附属属性内容；对结构数据进行追溯；结构数据验真；数据更新；数据授权；数据删除等。

  ***Java调用示例**

    
 ~~~java    
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    CountDownLatch countDownLatch = new CountDownLatch(1);
    final DataTxStatus[] dataTxStatus = {new DataTxStatus()};
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
    DataAuthorise DataUpload = new DataAuthorise(frontend,Config.BUSINESS_DOMAIN_ID) {
    
        @Override
        public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
            dataTxStatus[0] = dUploadStatus;
            countDownLatch.countDown();
            log.info("onTxBlockConfirm，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxBlockCfmFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
            countDownLatch.countDown();
        }
    
        @Override
        public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxSendSuccess，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxSendFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
            countDownLatch.countDown();
        }
    
        @Override
        public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxExecSuccess，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
    
        }
    
        @Override
        public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxExecFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
            countDownLatch.countDown();
        }
    
        @Override
        public void onError(TxException e, Object context) {
            log.info("onError，返回信息为[{}]", JsonSerializer.formatToString(e));
            countDownLatch.countDown();
        }
    };
    
    
    
    
    //被授权的地址
    //Config.MANAGER_ADDRESS --被授权用户地址
    String address = Config.MANAGER_ADDRESS;
    String dataID= "0e9287f776ee83fa9ff64507c82d2e4f9418330c";
    DataUpload.setDataID(dataID);
    Client.RoleItem.Builder roleItem = Client.RoleItem.newBuilder();
    roleItem.setAddr(address);
    
    //加入多个被授权地址
    Client.RoleItem.Builder roleItem1 = Client.RoleItem.newBuilder();
    roleItem1.setAddr("6683906ee504b014bb5cad396b0261c0eb294a21");
    
    //读权限
    DataUpload.setReaders(new Client.RoleItem[] {roleItem.build(),roleItem1.build()});
    
    // 分享权限
    DataUpload.setSharers(new Client.RoleItem[] {roleItem.build(),roleItem1.build()});
    
    //上链操作
    //Config.OWNER_PRIVATE_KEY  --用户私钥
    DataUpload.submit(Config.OWNER_PRIVATE_KEY);
    //等待callback信息
    countDownLatch.await();
    //断言成功失败
    Assert.assertEquals(dataTxStatus[0].getErrorCode(),1);
 ~~~    

#### 取消授权

所有者收回特定数字身份对指定业务域中的结构数据的读取权限。

  ***Java调用示例**

    
 ~~~java    
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    CountDownLatch countDownLatch = new CountDownLatch(1);
    final DataTxStatus[] dataTxStatus = {new DataTxStatus()};
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
    DataAuthorise DataUpload = new DataAuthorise(frontend,Config.BUSINESS_DOMAIN_ID) {
    
        @Override
        public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
            dataTxStatus[0] = dUploadStatus;
            countDownLatch.countDown();
            log.info("onTxBlockConfirm，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxBlockCfmFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
            countDownLatch.countDown();
        }
    
        @Override
        public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxSendSuccess，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxSendFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
            countDownLatch.countDown();
        }
    
        @Override
        public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxExecSuccess，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
    
        }
    
        @Override
        public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxExecFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
            countDownLatch.countDown();
        }
    
        @Override
        public void onError(TxException e, Object context) {
            log.info("onError，返回信息为[{}]", JsonSerializer.formatToString(e));
            countDownLatch.countDown();
        }
    };
    //被授权的地址
    String dataID= "2cf386470039706fcfc6bbbf16aeaaf3956bfecd";
    DataUpload.setDataID(dataID);
    //需要被删除的被授权地址
    String [] removeList = {"6683906ee504b014bb5cad396b0261c0eb294a28"};
    //删除权限操作，可以和添加权限操作同时执行
    DataUpload.removeReaders(removeList);
    //上链操作
    DataUpload.submit(Config.OWNER_PRIVATE_KEY);
    //等待callback信息
    countDownLatch.await();
    //断言成功失败
    Assert.assertEquals(dataTxStatus[0].getErrorCode(),1);
 ~~~    

#### 权限列表获取

获取链上业务域中特定结构数据的权限列表信息，包括读取/分享/所有者权限列表。

  * 结构数据所有者有权获取完整的所有者列表和所有者分别授权的读取者列表；完整的分享者列表和分享者分别授权的读取者列表。
  * 结构数据分享者有权获取自己授权的读取者列表。
  * 结构数据读取者无权获取结构数据权限列表。
  ***Java调用示例**

    
 ~~~java    
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    CountDownLatch cdl = new CountDownLatch(1);
    final DataRightsFetchStatus[] rightsFetchStatus = {new DataRightsFetchStatus()};
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL);
    DataRightsFetch DataUpload = new DataRightsFetch(frontend, Config.BUSINESS_DOMAIN_ID) {
    
    
       @Override
       public void onSuccess(DataRightsFetchStatus dRightsFetchStatus, Object context) {
           rightsFetchStatus[0] = dRightsFetchStatus;
           log.info("onSuccess，返回信息为[{}]", dRightsFetchStatus);
           cdl.countDown();
    
           System.out.println("链外应用系统调用端的唯一标识=" + context);
           DataRightsFetchStatus.RightsInfo oDataRightsInfo = dRightsFetchStatus.getDataRights();
           for (int i = 0; i < oDataRightsInfo.getOwners().size(); i++) {
               System.out.println("结构数据所有者身份标识: " + oDataRightsInfo.getOwners().get(i));
           }
    
           //结构数据所有者所授权的分享者列表
           List<DataRightsFetchStatus.Readers> oSharersSetByOwner = dRightsFetchStatus.getDataRights().getReadersBySharer();
           for (int j = 0; j < oSharersSetByOwner.size(); j++) {
               System.out.println("有授权分享者的结构数据所有者数字身份标识=" + oSharersSetByOwner.get(j).getGrantorID());
               for (int n = 0; n < oSharersSetByOwner.get(j).getReaders().size(); n++) {
                   System.out.println("当前结构数据所有者授权的分享者数字身份标识=" + oSharersSetByOwner.get(j).getReaders().get(n));
               }
           }
       }
    
       @Override
       public void onFailure(DataRightsFetchStatus dRightsFetchStatus, Object context) {
           log.info("onFailure，返回信息为[{}]", dRightsFetchStatus);
           cdl.countDown();
       }
    
       @Override
       public void onError(FetchException e, Object context) {
           log.info("onError，返回信息为[{}]", e);
           cdl.countDown();
       }
    };
    // Config.DATA_ID  --指定获取权限列表的链上结构数据的结构数据链上ID
    DataUpload.setDataID(Config.DATA_ID);
    //进行"结构数据权限列表获取"上链操作提交
    //Config.OWNER_PRIVATE_KEY --用户私钥
    DataUpload.query(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assert.assertEquals(rightsFetchStatus[0].getErrorCode(), 1);
 ~~~    

### 数据获取

从特定的业务域中获取指定结构化数据的指定版本的链上数据和相关元数据。

被设置为删除状态的结构数据是可以被读取到的，只不过状态被标记为删除。

  ***Java调用示例**

    
    
 ~~~java    
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
    CountDownLatch countDownLatch = new CountDownLatch(1);
    final DataFetchStatus[] dFetchStatu = {new DataFetchStatus()};
    DataFetch DataUpload = new DataFetch(frontend,Config.BUSINESS_DOMAIN_ID) {
        @Override
        public void onSuccess(DataFetchStatus dFetchStatus, Object context) {
            //事件触发条件：在"数据获取"链上操作处理彻底完成，数据已成功下载。
            log.info("结构化数据链上ID"+ dFetchStatus.getData().getDataID());
            log.info("结构化数据链上ID"+ dFetchStatus.getData().getDataID());
            log.info("结构化数据当前版本ID"+ dFetchStatus.getData().getVersionID());
            log.info("结构化数据"+ dFetchStatus.getData().getDataContent());
            log.info("结构化数据附属属性"+ dFetchStatus.getData().getDataProperty());
            log.info("结构化数据本体指纹特征值"+ dFetchStatus.getData().getDataDigest());
            log.info("结构化数据的删除状态，取值1=删除；0=有效"+ dFetchStatus.getData().getDelStatus());
            log.info("结构化数据上链保存时间，datetime对应的int64类型"+ dFetchStatus.getData().getUploadTime());
            log.info("敏感数据加密方式名称"+ dFetchStatus.getData().getEncName());
            log.info(" 密钥加密结果（新增）"+ dFetchStatus.getData().getEncKey());
            log.info("结构化数据本体指纹特征值"+ dFetchStatus.getData().getTcVerifyData());
            log.info("自动核验 任务记录,key:callId"+ dFetchStatus.getData().getVerifyRecs());
            dFetchStatu[0] =dFetchStatus;
            log.info("onSuccess，返回信息为[{}]", dFetchStatus);
            String data =dFetchStatus.getData().getDataContent();
            log.info("上传的值"+data);
            countDownLatch.countDown();
    
    
        }
    
        @Override
        public void onFailure(DataFetchStatus dFetchStatus, Object context) {
            //事件触发条件：在"数据获取"链上操作处理失败，数据未被下载。
            log.info("onFailure，返回信息为[{}]", JsonSerializer.formatToString(dFetchStatus));
            countDownLatch.countDown();
        }
    
        @Override
        public void onError(FetchException e, Object context) {
            //事件触发条件：DataFetch调用出现异常。并返回异常信息。
            log.info("onFailure，返回信息为[{}]", JsonSerializer.formatToString(e));
            countDownLatch.countDown();
        }
    };
    //Config.DATA_ID   --数据唯一ID
    DataUpload.setDataID(Config.DATA_ID);
    //Config.OWNER_PRIVATE_KEY  --用户私钥
    DataUpload.query(Config.OWNER_PRIVATE_KEY);
    countDownLatch.await();
    Assert.assertEquals(dFetchStatu[0].getErrorCode(),1);
 ~~~    

### 数据删除

所有者对指定业务域中的结构数据设置为删除状态。

结构数据一旦为设置为删除状态，结构数据将无法再继续进行"数据更新"。

  ***Java调用示例**

    
 ~~~java    
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
    CountDownLatch cdl = new CountDownLatch(1);
    final DataTxStatus[] dts = {new DataTxStatus()};
    DataDelete DataUpload = new DataDelete(frontend,Config.BUSINESS_DOMAIN_ID) {
    
        @Override
        public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
            log.info("onTxBlockConfirm，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
            //事件触发条件：数据删除上链交易执行成功，并获得落块确认。
            cdl.countDown();
            dts[0] = dUploadStatus;
            DataTxStatus.DataTxBlockInfo txBlockData = dUploadStatus.getTxBlockData();
            log.info("结构化数据唯一ID"+txBlockData.getDataID());
            log.info("结构化数据ID"+txBlockData.getVersionID());
            log.info("交易hash"+txBlockData.getTxHash());
            log.info("交易上链时间"+txBlockData.getTxExecTimestamp());
            log.info("交易块儿hash"+txBlockData.getBlockHash());
            log.info("交易落块儿时间"+txBlockData.getBlockedTimestamp());
            log.info("交易块儿高度"+txBlockData.getBlockHeight());
            log.info("当前链最高块儿"+txBlockData.getCurrentBlockHeight());
            log.info("状态"+dUploadStatus.getStatus());
            log.info("错误码"+dUploadStatus. getErrorCode());
            log.info("信息"+dUploadStatus. getMessage());
        }
    
        @Override
        public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：数据删除上链交易落块确认失败，删除状态变更被链回滚。
            //事件触发后，会返回错误信息。数据删除上链交易请求需重新提交。
            cdl.countDown();
            log.info("onTxBlockCfmFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：数据删除上链交易发送成功，等待区块链执行处理。
            log.info("onTxSendSuccess，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：数据删除上链交易发送失败。
            //事件触发后，会返回错误信息。
            cdl.countDown();
            log.info("onTxSendFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：数据删除上链交易执行成功，等待落块确认。
            log.info("onTxExecSuccess，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
            //事件触发条件：数据删除上链交易执行失败，删除状态变更未在链上生效。
            //事件触发后，会返回错误信息。删除状态变更上链交易请求需重新提交。
            cdl.countDown();
            log.info("onTxExecFailure，返回信息为[{}]", JsonSerializer.formatToString(dUploadStatus));
        }
    
        @Override
        public void onError(TxException e, Object context) {
            //事件触发条件：DataDelete调用出现异常。并返回异常信息。
            cdl.countDown();
            log.info("onError，返回信息为[{}]", JsonSerializer.formatToString(e));
        }
    };
    
    // Config.DATA_ID --数据ID
    DataUpload.setDataID(Config.DATA_ID);
    //Config.OWNER_PRIVATE_KEY  --用户私钥
    DataUpload.submit(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assert.assertEquals(dts[0].getErrorCode(),1);
 ~~~    

### 数据验真

获取指定业务域中指定结构数据的指定版本的数据体指纹特征值，以便和自己本地拥有的数据体进行一致性验证。任何人都有权获取，但调用的业务系统身份标识需要获得相应业务域的访问许可授权。

  ***Java调用示例**

    
 ~~~java    
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
    DataDigestCheck DataUpload = new DataDigestCheck(frontend,Config.BUSINESS_DOMAIN_ID);
    // Config.DATA_ID  --数据唯一ID
    DataUpload.setDataID(Config.DATA_ID);
    //Config.DATA_VERSION   --数据版本
    DataUpload.setVersionID(Config.DATA_VERSION);
    //dataDigest   --结构化数据指纹特征（文件hash）  查询的时候返回
    String dataDigest="b29a761257ad59867764539056b8dc13ce3a32e69a078767f3d854233727dc0e";
    DataUpload.setDataDigest(dataDigest);
    DataDigestCheckStatus ret =dataUpload.query();
    log.info("DataDigestCheckStatus:"+ret);
    while (true){
        Thread.sleep(10);
    }
 ~~~    

### 数据追溯

依据结构化数据在链上的历史版本列表信息，遍历链上结构数据的不同版本的内容，即查看链上结构数据的历史演变过程。

  * **Java调用示例**

    
 ~~~java    
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    CountDownLatch cdl = new CountDownLatch(1);
    final DataVersionsFetchStatus[] dvf = {new DataVersionsFetchStatus()};
    Frontend frontend = new Frontend(com.coolawchain.sdk.config.Config.SYSTEM_PRIVATE_KEY, Config.FRONT_SERVER_URL);
    DataVersionsFetch DataUpload = new DataVersionsFetch(frontend,Config.BUSINESS_DOMAIN_ID){
    
    
        @Override
        public void onSuccess(DataVersionsFetchStatus dVerFetchStatus, Object context) {
            cdl.countDown();
            dvf[0] = dVerFetchStatus;
            //事件触发条件："获取数据版本列表"成功下载。
            //事件触发条件："获取数据版本列表"成功下载。
    
            List<DataVersionsFetchStatus.DataVersionInfo> oDataVersionInfo = dVerFetchStatus.getVersions();
            for (int i=0; i< oDataVersionInfo.size(); i++) {
                System.out.println("数据版本标识: " + oDataVersionInfo.get(i).getVersionID());
                System.out.println("数据版本的生成时间戳: " + oDataVersionInfo.get(i).getTimestamp());
            }
                log.info("onSuccess，返回信息为[{}]", JsonSerializer.formatToString(dVerFetchStatus));
        }
    
        @Override
        public void onFailure(DataVersionsFetchStatus dVerFetchStatus, Object context) {
            cdl.countDown();
            //事件触发条件："数据版本列表获取"链上操作处理失败，数据版本列表未被下载。
            log.info("onFailure，返回信息为[{}]", JsonSerializer.formatToString(dVerFetchStatus));
        }
    
        @Override
        public void onError(FetchException e, Object context) {
            cdl.countDown();
            //事件触发条件：DataVersionsFetch调用出现异常。并返回异常信息。
            log.info("onFailure，返回信息为[{}]", JsonSerializer.formatToString(e));
        }
    };
    
    //Config.DATA_ID  --用户唯一ID
    DataUpload.setDataID(Config.DATA_ID);
    //Config.OWNER_PRIVATE_KEY  --用户私钥
    DataUpload.query(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assert.assertEquals(dvf[0].getErrorCode(),1);
 ~~~    

## 合约操作

智能合约通常用于规范业务数据结构以及数据的操作行为，合约一旦发布于链上合约代码将会固化下来，从而杜绝代码级篡改。

智能合约由业务域管理员发布于从法链特定的业务域中，合约内数据读写权限和合约方法的调用权限完全由合约内代码自行控制，因此从法链不提供系统级预置元数据和权限控制。

  * **链上数据结构**

![](/4e9dcbdf535f9f7baf780386414774f0.png)

  * 合约链上ID：记录合约的链上唯一标识，使用此ID进行合约调用。合约链上ID以字符串类型在链上进行明文保存。
    * 隶属业务域ID：记录合约所在业务域的身份标识。只有获得隶属业务域访问准入许可授权，方可调用此合约，但能不能访问合约内数据或调用合约暴露出来的方法，由合约内代码自行控制。

### 合约方法调用

  * **Java调用示例**

    
 ~~~java    
    // Config.SYSTEM_PRIVATE_KEY --赋值业务系统数字身份私钥
    // Config.FRONT_SERVER_URL --前置节点调用接口地址
    // Config.BUSINESS_DOMAIN_ID --业务域ID
    //--创建前置节点对象
    Frontend frontend = new Frontend(Config.SYSTEM_PRIVATE_KEY,Config.FRONT_SERVER_URL);
    CountDownLatch cdl = new CountDownLatch(1);
    final ContractCallStatus[] ccs = {new ContractCallStatus()};
    ContractCall DataMetaUpate = new ContractCall(frontend,Config.BUSINESS_DOMAIN_ID) {
    
        @Override
        public void onTxBlockConfirm(ContractCallStatus scCallStatus, Object context) {
            //事件触发条件：合约调用成功，并获得落块确认。
            cdl.countDown();
            ccs[0]=scCallStatus;
            ContractCallStatus.TxBlockData scTxBlockInfoTxBlockData = scCallStatus.getSCTxBlockInfoTxBlockData();
            log.info("块信息"+scTxBlockInfoTxBlockData);
            ContractCallStatus.ContractTxInfo scHexReturnData = scCallStatus.getSCHexReturnData();
            log.info("合约交易Hash"+scHexReturnData.getTxHash());
            log.info("合约交易上链时间"+scHexReturnData.getTxExecTimestamp());
            log.info("合约调用成功后的返回结构数据，返回结构遵循合约定义。此字段会在TxExecSuccess和TxBlockConfirm状态时返回。"+scHexReturnData.getScResult());
        }
    
        @Override
        public void onTxBlockCfmFailure(ContractCallStatus scCallStatus, Object context) {
            //事件触发条件：合约调用上链交易落块确认失败，合约调用影响的链上数据变化被链回滚。
            //事件触发后，会返回错误信息。合约调用上链交易请求需重新提交。
            log.info("返回同上onTxBlockConfirm");
        }
    
        @Override
        public void onTxSendSuccess(ContractCallStatus scCallStatus, Object context) {
            //事件触发条件：合约调用上链交易发送成功，等待区块链执行处理。
            log.info("返回同上onTxBlockConfirm");
        }
    
        @Override
        public void onTxSendFailure(ContractCallStatus scCallStatus, Object context) {
            //事件触发条件：合约调用上链交易发送失败。
            log.info("返回同上onTxBlockConfirm");
        }
    
        @Override
        public void onTxExecSuccess(ContractCallStatus scCallStatus, Object context) {
            //事件触发条件：合约调用上链交易执行成功，等待落块确认。
            log.info("返回同上onTxBlockConfirm");
        }
    
        @Override
        public void onTxExecFailure(ContractCallStatus scCallStatus, Object context) {
            //事件触发条件：合约调用上链交易执行失败，合约调用影响的链上数据变化未上链生效。
            log.info("返回同上onTxBlockConfirm");
        }
    
        @Override
        public void onError(TxException e, Object context) {
            //事件触发条件：ContractCall调用出现异常。并返回异常信息。
        }
    };
    //callData  合约api
    String callData ="0x58a40cc40000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000026331000000000000000000000000000000000000000000000000000000000000";
    //合约地址
    String scAddress ="0x778809772010E60ACeC161B8Aa965B42004033Df";
    dataMetaUpate.setSCHexParam(callData);
    dataMetaUpate.setSCAddress(scAddress);
    //Config.OWNER_PRIVATE_KEY  --用户私钥
    dataMetaUpate.submit(Config.OWNER_PRIVATE_KEY);
    cdl.await();
    Assert.assertEquals(ccs[0].getErrorCode(),1);
 ~~~
