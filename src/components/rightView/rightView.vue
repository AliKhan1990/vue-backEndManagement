<template>
  <transition name="rightView">
    <el-row class="rightView" :xs="24">
      <div class="viewPort">
        <el-carousel :interval="2000" type="card" height="3rem" trigger="click" class="rcarousel">
          <el-carousel-item>
            <img src="./colle01.png">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./colle02.png">
          </el-carousel-item>
          <el-carousel-item>
            <img src="./colle03.jpg">
          </el-carousel-item>
        </el-carousel>
        <el-row :gutter="15" class="work-wrap">
          <h4 class="myWork">我的工作 <span class="line"></span></h4>
          <el-col :md="7" :xs="24">
            <el-card class="card" :body-style="{ padding: '0px' }">
              <img style="width: 100%" src="./coffe.jpg" class="image">
              <div style="padding: 14px;">
                <p class="cart-title">“互联网+智慧社区”建设 让居民共享微时代的便捷</p>
                <div class="bottom clearfix">
                  <time class="time">May 2, 2017	</time>
                  <p>{{text.substring(0, 100) + '...'}}</p>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :md="10" :xs="24">
            <el-card class="card" :body-style="{ padding: '0px' }" :offset="1">
              <h5 class="card-title">我的工作流</h5>
              <div class="todoList">
                <div class="todo" :class="{over:item.over}" v-for="(item,index) in todos">
                  <el-col :span="4" class="radio" v-show="item.show">
                    <el-checkbox v-model="item.over"></el-checkbox>
                  </el-col>
                  <el-col :span="item.show ? 20 : 24" class="lase">
                    <div class="info">
                      <div class="title">
                        {{item.text}}
                      </div>
                      <time v-show="item.show">{{item.time}}</time>
                      <div class="via" v-show="item.show">
                        - Assigned to <span class="someBody">{{item.someBody}}</span>
                      </div>
                    </div>
                    <div class="ctrl">
                      <div class="lctrl" v-show="item.show">
                        <span><a href="javascript:void(0)" @click="editTodo(index)">编辑</a></span> | <span><a
                        href="javascript:void(0)" @click="deleteTodo(index)">删除</a></span>
                      </div>
                      <el-button type="mini" @click="toggleTodo(index)">{{item.show ? '收起' : '展开'}}</el-button>
                    </div>
                  </el-col>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :md="7" :xs="24">
            <el-card class="card" :body-style="{ padding: '0px' }">
              <h5 class="card-title">工作日历</h5>
              <!--<button @click="refreshEvents">Refresh</button>-->
              <!--<button v-if="selected._id" @click="removeEvent">Remove</button>-->
              <full-calendar ref="calendar"
                             :event-sources="eventSources"
                             @event-selected="eventSelected"
                             @event-created="eventCreated"
                             :config="config">
              </full-calendar>
              <div class="events-info">
                <time class="start">开始时间：{{ selected.start }}</time>
                <time class="end">结束时间：{{ selected.end }}</time>
                <span class="event">日程：{{ selected.title }}</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-row>
  </transition>
</template>

<script type="text/ecmascript-6">
  import moment from 'moment';
  export default{
    props: {
      toggleTurn: {
        type: Boolean
      }
    },
    data(){
      return {
        text: '为完善社区服务功能，提高居民生活质量，提升社区办事效率和服务能力，充分体现社区以人为本、服务民生的作用，2017年4月30日丰满区江南街龙城社区与居民志愿者们共同建立了雾凇美事公众号，自5月1日起进行内测，拟于6月1日正式上线。旨在打造一个居民身边集资讯、天气、出行服务为一体的伴侣式公众号，开启微生活时代，不定期的有各种生活和娱乐信息惠及居民，公众号一切服务均为公益服务，完全义务为小区居民和关注者服务。cash.',
        todos: [{
          show: true,
          over: true,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit - task',
          time: 'Completed 8h ago',
          someBody: 'Gheorghe Bubu'
        }, {
          show: true,
          over: true,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit - task',
          time: 'Completed 8h ago',
          someBody: 'Gheorghe Bubu'
        }, {
          show: true,
          over: true,
          text: 'Integer at turpis id orci laoreet sollicitudin ac sed diam',
          time: 'Scheduled for 24th February ',
          someBody: 'Gheorghe Bubu'
        }, {
          show: true,
          over: false,
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit - task',
          time: 'Completed 8h ago',
          someBody: 'Gheorghe Bubu'
        }],
        events: [
          {
            id: 1,
            title: '开会会',
            start: moment().hours(12).minutes(0)
          },
          {
            id: 2,
            title: '会议',
            start: moment().add(-1, 'days'),
            end: moment().add(3, 'days'),
            allDay: true
          },
          {
            id: 3,
            title: '这是真的吗',
            start: moment().add(2, 'days'),
            end: moment().add(2, 'days').add(6, 'hours'),
            allDay: false
          },
          {
            id: 4,
            title: '阿拉拉拉',
            start: moment().add(0, 'days'),
            end: moment().add(2, 'days').add(6, 'hours'),
            allDay: true
          }
        ],
        config: {
          eventClick: (event) => {
            this.selected = event;
          }
        },
        selected: {}
      };
    },
    methods: {
      refreshEvents() {
        this.$refs.calendar.$emit('refetch-events');
      },

      removeEvent() {
        this.$refs.calendar.$emit('remove-event', this.selected);
        this.selected = {};
      },

      eventSelected(event) {
        this.selected = event;
      },

      eventCreated(...test) {
        console.log(test);
      },

      deleteTodo(index) {
        this.$confirm('此操作将删除日程, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.todos.splice(index, 1);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

      toggleTodo(index){
        setTimeout(() => {
          this.todos[index].show = !this.todos[index].show;
        }, 300);
      },

      editTodo(index){
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('div', null, [
            h('p', '指派给：' + this.todos[index].someBody, '指派给：'),
            h('br'),
            h('span', null, '修改内容： ')
          ]),
          showInput: true,
          inputValue: this.todos[index].text,
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              this.todos[index].text = instance.inputValue;
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    },
    computed: {
      eventSources() {
        const self = this;
        return [
          {
            events(start, end, timezone, callback) {
              setTimeout(() => {
                callback(self.events.filter(() => Math.random() > 0.5));
              }, 100);
            }
          }
        ];
      }
    }
  };
</script>
<style lang="less" rel="stylesheet/less">
  @import '~fullcalendar/dist/fullcalendar.css';
  .rightView {
    padding-bottom: 1rem;
    overflow: scroll;
    background: #fafafa;
    .viewPort {
      position: relative;
      top: 1rem;
      padding: 30px;
      padding-bottom: 0;
      .rcarousel {
        height: 3.5rem;
        .el-carousel__container {
          height: 6rem;
          .el-carousel__item {
            img {
              width: 100%;
            }
          }
        }
      }
    }
    .work-wrap {
      margin-bottom: .5rem;
    }
    .myWork {
      text-align: left;
      position: relative;
      font-size: .32rem;
      span.line {
        position: absolute;
        bottom: -5px;
        left: .5rem;
        width: 1.5rem;
        height: 3px;
        background: #31c27c;
        display: inline-block;
      }
    }
    .card {
      @media screen and(max-width: 774px){
        margin-bottom: 1rem;
      }
      .fc-event {
        border: 1px solid #31c27c;
      }
      .fc-unthemed td.fc-today {
        background: #fcf8e3;
      }
      .fc-event, .fc-event-dot {
        background-color: #31c27c;
        border-radius: 10px;
      }
      .fc-body, .fc-head {
        font-size: .14rem !important;
      }
      .fc-button {
        padding: 4px;
        font-size: 12px;
        border-radius: 4px;
      }
      .fc-scroller {
        overflow-x: hidden;
        overflow-y: scroll;
        height: 3rem !important;
      }
      .events-info {
        display: flex;
        flex-direction: column;
        time {
          padding: 0;
        }
        .event {
          font-size: .12rem;
          text-align: left;
        }
      }
      .calendar {
        height: 10rem;
      }
      .card-title {
        font-size: .28rem;
        margin: 10px 0;
        text-align: left;
        padding-left: 10px;
      }
      /*height: 6rem;*/
      overflow: scroll;
      .cart-title {
        font-size: .2rem;
        line-height: .4rem;
      }
      time {
        font-size: .18rem;
        text-align: left;
        display: block;
        color: #546e7a;
        padding: .2rem 0;
      }
      p {
        font-size: .18rem;
        padding: 0;
        margin: 0;
      }
    }
    .todoList {
      .todo {
        .radio {
          label {
            margin-top: .3rem;
          }
        }
        border-radius: .1rem;
        margin: 3px 10px;
        padding: 3px;
        &.over {
          background: #f1f5f7;
        }
        .lase {
          text-align: left;
        }
        font-size: .12rem;
        display: flex;
        flex-direction: row;
        .title {
          font-size: .12rem;
          font-weight: 600;
        }
        time {
          display: inline-block;
        }
        .ctrl {
          display: flex;
          justify-content: space-between;
        }
        .lctrl {
          a {
            text-decoration: none;
            color: #72848c;
            &:hover {
              color: #31c27c;
            }
          }
          span:nth-of-type(2) a:hover {
            color: indianred;
          }
        }
        .someBody {
          color: #10b1dc;
        }
      }
    }
    .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: #31c27c;
      border-color: #72d4a6;
      border-radius: 50%;
      width: .5rem;
      height: .5rem;
    }
    .el-checkbox__inner:hover {
      border-color: #72d4a6;
    }
    .el-checkbox__inner {
      border-radius: 50%;
      width: .5rem;
      height: .5rem;
    }
    .el-checkbox__inner::after {
      box-sizing: content-box;
      content: "";
      border: 2px solid #fff;
      border-left: 0;
      border-top: 0;
      height: .25rem;
      left: 30%;
      position: absolute;
      top: 10%;
      -ms-transform: rotate(45deg) scaleY(0);
      transform: rotate(45deg) scaleY(0);
      width: .15rem;
      transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
      -ms-transform-origin: center;
      transform-origin: center;
    }
    .fc-center{
      font-size: .2rem;
    }
    .fc-toolbar.fc-header-toolbar{
      margin-bottom: .1rem;
    }
  }

  .header {
    position: fixed;
    background: #fff;
    z-index: 50;
    border-bottom: #dedede 1px solid;
    display: flex;
    justify-content: space-between;
    .worktable {
      display: flex;
      flex-direction: row;
      img {
        width: .3rem;
        height: .3rem;
      }
    }
    a {
      display: inline-block;
      margin: .13rem;
      img {
        width: .5rem;
        height: .5rem;
      }
    }
  }

  .carousel {
    img {
      width: 100%;
    }
  }
  .el-message-box{
    width: 80%;
  }

  /*animation*/
  .rightView-enter-active {
    transition: all .3s;
  }

  .rightView-leave-active {
    transition: all .3s;
  }

  .rightView-enter, .rightView-leave-active {
    transform: translateX(10px);
    opacity: 0;
    transition: all .3s;
  }
</style>
