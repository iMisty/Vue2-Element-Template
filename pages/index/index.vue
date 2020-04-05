<template>
  <view>
    <view class="todo-header flex" v-if="list.length !== 0">
      <view class="todo-header-left">
        <text class="active-text">{{text}}</text>
        <text>{{listData.length}}条</text>
      </view>
      <view class="todo-header-right flex">
        <view class="todo-header-right-item" :class="{'active-tab':activeIndex === 0}" @click="tab(0)"> 全部 </view>
        <view class="todo-header-right-item" :class="{'active-tab':activeIndex === 1}" @click="tab(1)"> 待办 </view>
        <view class="todo-header-right-item" :class="{'active-tab':activeIndex === 2}" @click="tab(2)"> 已完成 </view>
      </view>
    </view>
    <view v-if="list.length === 0" class="todo-no-data flex">
      <image src="../../static/default.png" mode="aspectFit"></image>
      <text class="todo-no-data-text"> 当前没有待办事项 </text>
    </view>
    <view class="todo-wraper" v-else>
      <view class="todo-list" :class="{'todo-finished': item.checked}" v-for="(item,index) in listData" :key="index"
        @click="finished(item.id)">
        <view class="todo-list-checkbox">
          <view class="checkbox"></view>
        </view>
        <view class="todo-list-text">{{item.content}}</view>
      </view>
    </view>
    <view class="todo-create flex" @click="create">
      <text class="iconfont icon-add" :class="{'todo-active': textShow}"></text>
    </view>
    <view class="todo-content flex" v-if="active === true" :class="{'todo-text-active': textShow}">
      <view class="todo-content-box flex">
        <view class="create-input">
          <input type="text" v-model="value" placeholder="请输入你要创建的 todo">
        </view>
        <view class="create-button flex" @click="add">
          创建
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        active: false,
        activeIndex: 0,
        value: '',
        text: '全部',
        textShow: false
      }
    },
    onLoad() {

    },
    computed: {
      listData() {
        let list = JSON.parse(JSON.stringify(this.list));
        let newList = []
        const index = this.activeIndex;
        let text = this.text;
        if (index === 0) {
          text = '全部';
          return list;
        }
        if (index === 1) {
          list.forEach((item) => {
            if (!item.checked) {
              newList.push(item);
            }
          });
          text = '待办';
          return newList;
        }
        if (index === 2) {
          list.forEach((item) => {
            if (item.checked) {
              newList.push(item);
            }
          });
          text = '已完成';
          return newList;
        }
        return []
      }
    },
    methods: {
      create() {
        if(this.active === false){
          this.open();
        }else{
          this.close();
        }
      },
      open(){
        this.active = true;
        this.$nextTick(() =>{
          setTimeout(() => {this.textShow = !this.textShow;},50);
        })
      },
      close(){
        this.textShow = false;
        this.$nextTick(() =>{
          setTimeout(() => {this.active = false;},400);
        })
      },
      add() {
        //console.log(this.value);
        if (this.value === '') {
          uni.showToast({
            title: '请输入内容',
            icon: 'none'
          });
          return;
        } else {
          this.list.unshift({
            id: 'id' + new Date().getTime(),
            content: this.value,
            checked: false
          });
        }
        this.value = '';
        this.close();
      },
      finished(id) {
        let index = this.list.findIndex((item) => item.id === id);
        this.list[index].checked = !this.list[index].checked;
      },
      tab(index) {
        this.activeIndex = index;
      }
    }
  }
</script>

<style>
  @import url("../../common/icon.css");

  .todo-header {
    box-sizing: border-box;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px 16px;
    font-size: 12px;
    color: #333;
    background: #fff;
    height: 48rpx;
    z-index: 4;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .1);
  }

  .todo-header-left {
    width: 100%;
  }

  .todo-header-right {
    flex-shrink: 0;
  }

  .todo-header-right-item {
    padding: 0 4px;
  }

  .todo-wraper {
    position: relative;
    padding-top: 48px;
    padding-bottom: 96px;
  }

  .todo-list {
    position: relative;
    display: flex;
    align-items: center;
    padding: 16px;
    margin: 16px;
    box-shadow: -1px 1px 4px 1px rgba(0, 0, 0, .1), -1px 2px 1px 0 rgba(255, 255, 255, 1) inset;
    border-radius: 12px;
    background: #cfebfd;
    color: #0c3854;
    font-size: 14rpx;
    overflow: hidden;
  }

  .todo-list::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    background: #91d1e8;
    overflow: hidden;
  }

  .todo-list-checkbox {
    padding-right: 16px;
  }

  .todo-finished .checkbox {
    position: relative;
    background: #eee;
  }

  .todo-finished .checkbox::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: #CFEBFD;
    border-radius: 64%;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, .1) inset;
  }

  .todo-finished .todo-list-text {
    position: relative;
    color: #999;
  }

  .todo-finished.todo-list::after {
    background-color: #ccc;
  }

  .todo-finished.todo-list::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    right: 12px;
    height: 2px;
    margin: auto 0;
    background: #bdcdd8;
  }

  .todo-create {
    position: fixed;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 24px;
    left: 0;
    right: 0;
    width: 48px;
    height: 48px;
    margin: 0 auto;
    border-radius: 64%;
    background-color: #deeff5;
    box-shadow: -1px 1px 4px 2px rgba(0, 0, 0, .1), -1px 1px 1px 0 rgba(255, 255, 255, .1) inset;
  }

  .icon-add {
    font-size: 28px;
    color: #add8e6;
    transition-duration: .4s;
  }

  .todo-content {
    position: fixed;
    width: 100%;
    bottom: 0;
    transition: all .4s;
    opacity: 0;
    transform: scale(0) translateY(200%);
  }

  .todo-content-box {
    position: fixed;
    justify-content: space-between;
    align-items: center;
    bottom: 96px;
    left: 24px;
    right: 24px;
    padding: 4px 16px;
    border-radius: 32px;
    background-color: #deeff5;
    z-index: 2;
    box-shadow: -1px 1px 4px 2px rgba(0, 0, 0, .1), -1px 1px 1px 0 rgba(255, 255, 255, .1) inset;
    transition-duration: .4s;
  }

  .todo-content-box::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 16px;
    height: 16px;
    background-color: #deeff5;
    transform: rotate(45deg);
  }

  .todo-content::after {
    content: '';
    position: absolute;
    bottom: 88px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 16px;
    height: 16px;
    background-color: #deeff5;
    z-index: -1;
    transform: rotate(45deg);
    box-shadow: -1px 1px 4px 2px rgba(0, 0, 0, .1), -1px 1px 1px 0 rgba(255, 255, 255, .1) inset;
  }

  .create-input {
    width: 100%;
    padding-right: 16px;
    color: #add8e6;
  }

  .create-button {
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 80px;
    height: 48px;
    border-radius: 50px;
    font-size: 16px;
    color: #88d4dc;
    box-shadow: -2px 0 2px 1px rgba(0, 0, 0, .1);
    transition-duration: .4s;
  }

  .todo-no-data {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 96px;
  }

  .todo-no-data-text {
    color: #999;
    font-size: 14px;
  }
  
  .checkbox {
    width: 16px;
    height: 16px;
    border-radius: 64%;
    background-color: #fff;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, .1);
  }
  
  .active-tab {
    color: #279abf;
  }
  
  .active-text {
    padding-right: 8rpx;
    color: #279abf;
    font-size: 14px;
  }
  .todo-active{
    transform: rotate(135deg);
    transition-duration: .4s;
  }
  .todo-text-active{
    opacity: 1;
    transform: scale(1) translateY(0);
    transition-duration: .4s;
   }
</style>
