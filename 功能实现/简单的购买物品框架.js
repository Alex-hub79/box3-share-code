const npc = world.querySelector('.卖家的标签');
npc.enableInteract = true; // 允许进行互动
npc.interactRadius = 2;   // 实体的互动范围
npc.interactHint = npc.id; // 互动提示框显示实体的名称    

npc.onInteract(async ({ entity }) => { //当玩家对这个npc按E触发交互, npc问你想买哪些商品
    const goodsList = ['货1','货2','货3','货4'] //货品列表
    const priceList = [1,2,3,4]                     //价格列表
    const selection = await entity.player.dialog({
        type: Box3DialogType.SELECT, //对话框类型为选择框
        content: `你有${entity.money}元, 想买点什么呢?`,
        title: npc.id, //对话框左上角显示NPC名字
        options: ['货1(1元)','货2(2元)','货3(3元)','货4(4元)'], //选项
    })
    if (selection) { //如果玩家没有点击'x'关闭对话框
        const goods = goodsList[selection.index] //被选中的货物
        const price = priceList[selection.index] //被选中货物的价格
        if (entity.money >= price) { //如果玩家的钱足够
            entity.money -= price //扣钱
            if(goods == '货1'){        //判断玩家购买物品，根据玩家购买物品做出交互
                entity.player.dialog({ //弹出对话框
                    type: Box3DialogType.TEXT, //对话框类型为纯文本
                    content:'成功购买货1', //文本内容
                    title: npc.id, //对话框左上角标题内容
                })
            }
            else if(goods == '货2'){
                entity.player.dialog({ //弹出对话框
                    type: Box3DialogType.TEXT, //对话框类型为纯文本
                    content:'成功购买货2', //文本内容
                    title: npc.id, //对话框左上角标题内容
                })
            }
            else if(goods == '货3'){
                entity.player.dialog({ //弹出对话框
                    type: Box3DialogType.TEXT, //对话框类型为纯文本
                    content:'成功购买货3', //文本内容
                    title: npc.id, //对话框左上角标题内容
                })
            }
            else if(goods == '货4'){
                entity.player.dialog({ //弹出对话框
                    type: Box3DialogType.TEXT, //对话框类型为纯文本
                    content:'成功购买货4', //文本内容
                    title: npc.id, //对话框左上角标题内容
                })
            }
        }
    }
})
