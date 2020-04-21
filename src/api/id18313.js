
      /**
      * 查询任务列表
      * 返回示例
<span class="colour" style="color: rgb(0, 0, 0);">{</span>
<span class="colour" style="color: rgb(0, 0, 0);">    </span><span class="colour" style="color: rgb(163, 21, 21);">"data"</span><span class="colour" style="color: rgb(0, 0, 0);">: {</span>
<span class="colour" style="color: rgb(0, 0, 0);">        </span><span class="colour" style="color: rgb(163, 21, 21);">"total_count"</span><span class="colour" style="color: rgb(0, 0, 0);">: </span><span class="colour" style="color: rgb(9, 136, 90);">1</span><span class="colour" style="color: rgb(0, 0, 0);">,</span>
<span class="colour" style="color: rgb(0, 0, 0);">        </span><span class="colour" style="color: rgb(163, 21, 21);">"last_id"</span><span class="colour" style="color: rgb(0, 0, 0);">: </span><span class="colour" style="color: rgb(9, 136, 90);">-1</span><span class="colour" style="color: rgb(0, 0, 0);">,</span>
<span class="colour" style="color: rgb(0, 0, 0);">        </span><span class="colour" style="color: rgb(163, 21, 21);">"data"</span><span class="colour" style="color: rgb(0, 0, 0);">: [</span>
<span class="colour" style="color: rgb(0, 0, 0);">            {</span>
<span class="colour" style="color: rgb(0, 0, 0);">                </span><span class="colour" style="color: rgb(163, 21, 21);">"mission_title"</span><span class="colour" style="color: rgb(0, 0, 0);">: </span><span class="colour" style="color: rgb(4, 81, 165);">"111"</span><span class="colour" style="color: rgb(0, 0, 0);">,</span>
<span class="colour" style="color: rgb(0, 0, 0);">                </span><span class="colour" style="color: rgb(163, 21, 21);">"mission\_start\_time"</span><span class="colour" style="color: rgb(0, 0, 0);">: </span><span class="colour" style="color: rgb(4, 81, 165);">"2020-01-01 00:00:00"</span><span class="colour" style="color: rgb(0, 0, 0);">,</span>
<span class="colour" style="color: rgb(0, 0, 0);">                </span><span class="colour" style="color: rgb(163, 21, 21);">"mission\_end\_time"</span><span class="colour" style="color: rgb(0, 0, 0);">: </span><span class="colour" style="color: rgb(4, 81, 165);">"2020-12-01 00:00:00"</span><span class="colour" style="color: rgb(0, 0, 0);">,</span>
<span class="colour" style="color: rgb(0, 0, 0);">                </span><span class="colour" style="color: rgb(163, 21, 21);">"mission_type"</span><span class="colour" style="color: rgb(0, 0, 0);">: </span><span class="colour" style="color: rgb(9, 136, 90);">100</span><span class="colour" style="color: rgb(0, 0, 0);">,</span>
<span class="colour" style="color: rgb(0, 0, 0);">                </span><span class="colour" style="color: rgb(163, 21, 21);">"id"</span><span class="colour" style="color: rgb(0, 0, 0);">: </span><span class="colour" style="color: rgb(9, 136, 90);">3</span>
<span class="colour" style="color: rgb(0, 0, 0);">            }</span>
<span class="colour" style="color: rgb(0, 0, 0);">        ]</span>
<span class="colour" style="color: rgb(0, 0, 0);">    },</span>
<span class="colour" style="color: rgb(0, 0, 0);">    </span><span class="colour" style="color: rgb(163, 21, 21);">"code"</span><span class="colour" style="color: rgb(0, 0, 0);">: </span><span class="colour" style="color: rgb(9, 136, 90);">10000</span><span class="colour" style="color: rgb(0, 0, 0);">,</span>
<span class="colour" style="color: rgb(0, 0, 0);">    </span><span class="colour" style="color: rgb(163, 21, 21);">"msg"</span><span class="colour" style="color: rgb(0, 0, 0);">: </span><span class="colour" style="color: rgb(4, 81, 165);">"success"</span>
<span class="colour" style="color: rgb(0, 0, 0);">}</span>
      **/
      
    import request from '../js/ajax'
    
      export default (data) => request({
        method: 'GET',
        url: '/ec/m/operation/mission/list',
        data: {params: data}
      })
      