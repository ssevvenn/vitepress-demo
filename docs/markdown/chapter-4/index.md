---
prev: false
next: false
---
# 快速入门教程

## 文件上链保存

    
 ~~~java
    import com.coolawchain.sdk.jar.model;
    import com.coolawchain.sdk.jar.file;
    import com.coolawchain.sdk.jar.cryptoUtil;
    import com.googlecode.protobuf.format.JsonFormat;
    
    //初始化前置节点对象（即链上操作发送对象）
    //--赋值业务系统数字身份信息
    String systemPrivateKey = "2c173ae59c1a403a7b8e32ab2647589bef193f57a0bb04dfda5c1eb5f7bd79d0";
    KeyPairs systemKeyPair = CryptoUtil.crypto.genAccountKey(ownerPrivateKey);
    //--前置节点调用接口地址
    String frontendUrl = "http://127.1.1.1:9000/fbs/";
    //创建前置节点对象
    Frontend oFrontend = new Frontend(systemKeyPair, frontendUrl);
    
    FileUpload oFileUpload = new FileUpload();
    
    //设置要访问的前置节点
    oFileUpload.frontend = oFrontend;
    //设置要访问的业务域标识
    oFileUpload.bizDomain = "d2171dd13278269e63b348bb12da6c58946f19ff";
    //待上传的文件本体对应的文件对象
    File oLocalFile = new File("/storage/申请表.doc");
    oFileUpload.file(oLocalFile); 
    //--赋值提交上链交易的文件所有者数字身份标识（即文件所有者列表中的其中一个）
    oFileUpload.ownerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    //--赋值文件所有者数字身份标识
    String[] ownersList = {"0d64ad368ebc37ddb80424376408cb7bb88ff328"};
    oFileUpload.owners = ownersList;
    
    //--赋值文件名称
    oFileUpload.fileName = "申请表.doc";
    //--赋值文件扩展名
    oFileUpload.fileSuffix = "doc";
    //--赋值文件描述
    oFileUpload.fileDescription = "这是一个赋强公证申请表";
    //--赋值文件附属属性
    oFileUpload.fileProperty = "{'赋强公证流程': '启动阶段文书','接收单位': '公证处'}";
    
    //--赋值文件链上保存的副本数量
    oFileUpload.fileCopy = 3;
    //--赋值链上保存的文件切片数量
    oFileUpload.fileSlice = 5;
    
    //进行文件元数据和本体上链操作提交
    //--赋值提交上链交易的文件所有者数字身份私钥，ownerID对应的私钥
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    FileTxStatus oFileTxStatus = oFileUpload.submit(ownerPrivateKey);
    
    boolean flag = true;
    do {
         //查询文件保存链上操作处理状态
         oFileTxStatus = oFileUpload.getUploadStatus();
         if (oFileTxStatus.status == "UploadAccomplish") {
             flag = false;
             System.out.println("文件上链保存成功。");
         }
         Thread.sleep(2000);
    } while (flag);
~~~

## 结构数据上链保存

    
 ~~~java    
    import com.coolawchain.sdk.jar.model;
    import com.coolawchain.sdk.jar.structdata;
    import com.coolawchain.sdk.jar.cryptoUtil;
    import com.googlecode.protobuf.format.JsonFormat;
    
    //初始化前置节点对象（即链上操作发送对象）
    //--赋值业务系统数字身份信息
    String systemPrivateKey = "2c173ae59c1a403a7b8e32ab2647589bef193f57a0bb04dfda5c1eb5f7bd79d0";
    KeyPairs systemKeyPair = CryptoUtil.crypto.genAccountKey(ownerPrivateKey);
    //--前置节点调用接口地址
    String frontendUrl = "http://127.1.1.1:9000/fbs/";
    //--创建前置节点对象
    Frontend oFrontend = new Frontend(systemKeyPair, frontendUrl);
    
    DataUpload oDataUpload = new DataUpload() {
        @Override
        public void onTxBlockConfirm(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据上链保存成功，并获得落块确认。
           DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           System.out.println("数据当前版本ID =" + oDataTxBlockInfo.versionID);
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
        }
    
        @Override
        public void onTxBlockCfmFailure(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据保存上链交易落块确认失败，上链保存的结构数据被链回滚。
           //事件触发后，会返回错误信息。结构数据保存上链交易请求需重新提交。
           DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
           System.out.println("结构数据保存上链交易Hash =" + oDataTxBlockInfo.txHash);
           System.out.println("结构数据保存上链交易落块确认失败的返回结果=" + dUploadStatus.message);
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
        }
    
        @Override
        public void onTxSendSuccess(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据保存上链交易发送成功，等待区块链执行处理。 
           DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
           System.out.println("结构数据保存上链交易Hash =" + oDataTxBlockInfo.txHash);
        }
    
        @Override
        public void onTxSendFailure(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据保存上链交易发送失败。
           System.out.println("结构数据保存上链交易发送失败的返回结果=" + dUploadStatus.message);
        }
    
        @Override
        public void onTxExecSuccess(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据保存上链交易执行成功，结构数据上链保存成功，等待落块确认。
           DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           System.out.println("数据链上ID =" + oDataTxBlockInfo.dataID);
           System.out.println("数据当前版本ID=" + oDataTxBlockInfo.versionID);
           System.out.println("结构数据保存上链交易Hash=" + oDataTxBlockInfo.txHash);
           System.out.println("交易执行时间戳=" + oDataTxBlockInfo.txExecTimestamp.toString());
           System.out.println("交易所在区块hash=" + oDataTxBlockInfo.blockHash);
           System.out.println("交易所在区块生成时间戳" + oDataTxBlockInfo.blockedTimestamp.toString());
           System.out.println("交易所在区块高度=" + oDataTxBlockInfo.blockHeight);
        }
    
        @Override
        public void onTxExecFailure(DataTxStatus dUploadStatus, Object context) {
           //事件触发条件：结构数据保存上链交易执行失败，结构数据未上链保存。
           DataTxBlockInfo oDataTxBlockInfo = dUploadStatus.txBlockData;
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           System.out.println("结构数据保存上链交易Hash =" + oDataTxBlockInfo.txHash);
           System.out.println("链上执行失败的返回结果=" + dUploadStatus.message);
        }
    
        @Override
        public void onError(TxException e, Object context) {
           //事件触发条件：DataUpload调用出现异常。并返回异常信息。
           String dataIDFromCaller = context;
           System.out.println("链外应用系统调用端的唯一标识=" + dataIDFromCaller);
           System.out.println("异常状态描述=" + e.state);
           System.out.println("异常信息=" + e.exc);
        }
    };
    
    //待上链保存的结构数据在链外应用系统调用端的唯一标识，便于事件中进行后续业务逻辑处理。
    String dataIDfromCaller = "57bee7e51eb48b2896288021b7374cfc78c0bac8";
    oDataUpload.eventContext = dataIDfromCaller;
    //设置要访问的前置节点
    oDataUpload.frontend = oFrontend;
    //设置要访问的业务域标识
    oDataUpload.bizDomain = "d2171dd13278269e63b348bb12da6c58946f19ff";
    //--赋值提交上链交易的数据所有者数字身份标识（即结构数据所有者列表中的其中一个）
    oDataUpload.ownerID = "0d64ad368ebc37ddb80424376408cb7bb88ff328"; 
    //赋值结构数据所有者数字身份标识列表
    String[] ownersList = {"0d64ad368ebc37ddb80424376408cb7bb88ff328"};
    oDataUpload.owners = ownersList;
    
    //上链保存的结构数据内容
    oFileMetaUpdate.dataContent = "{'姓名': '张三','性别': '男'}";
    //结构数据的附属属性
    oFileMetaUpdate.dataProperty = "人员基本信息描述";
    
    //进行结构数据保存上链操作提交
    //--赋值提交上链交易的数据所有者数字身份私钥，ownerID对应的私钥
    String ownerPrivateKey = "3161be862236ae966004390908a5facb8f45763e38ce5cfb378e493f91a7873d";
    oDataUpload.submit(ownerPrivateKey);
~~~