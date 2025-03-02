<template><div><!-- 轮播图组件 -->
<ImageSwiper :items="swiperItems" :config="swiperConfig" /><h2 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息"><span>基本信息</span></a></h2>
<Tabs id="7" :data='[{"id":"公园概况"},{"id":"公园介绍"},{"id":"开放时间"}]' :active="0" tab-id="basic-info">
<template #title0="{ value, isActive }">公园概况</template><template #title1="{ value, isActive }">公园介绍</template><template #title2="{ value, isActive }">开放时间</template><template #tab0="{ value, isActive }"><h3 id="公园概况" tabindex="-1"><a class="header-anchor" href="#公园概况"><span>公园概况</span></a></h3>
<ul>
<li>公园ID: 1</li>
<li>所属区域: 龙华区</li>
<li>公园类别: 体育健身公园</li>
<li>公园标签: 儿童游乐 体育运动</li>
<li>详细地址: 深圳市龙华区华明路与大浪公园三路交会处东北角</li>
<li>咨询电话: 0755-29672309</li>
</ul>
</template><template #tab1="{ value, isActive }"><h3 id="公园简介" tabindex="-1"><a class="header-anchor" href="#公园简介"><span>公园简介</span></a></h3>
<p>大浪体育公园位于大浪公园一路与泥头咀交叉口西南100米，占地面积3.9万平方米，始建于90年代。公园建设了老人与儿童的游乐区，同时建有篮球场且设置有护栏网，方便市民更好地运动。登山道旁设有座椅，为市民跑步散步提供舒适的休息场地。</p>
</template><template #tab2="{ value, isActive }"><h3 id="开放时间" tabindex="-1"><a class="header-anchor" href="#开放时间"><span>开放时间</span></a></h3>
<ul>
<li>园区开放时间: 全天开放</li>
</ul>
</template></Tabs><h2 id="特色景点" tabindex="-1"><a class="header-anchor" href="#特色景点"><span>特色景点</span></a></h2>
<Tabs id="69" :data='[{"id":"大浪体育公园"},{"id":"待更新"}]' tab-id="park-intro">
<template #title0="{ value, isActive }">大浪体育公园</template><template #title1="{ value, isActive }">待更新</template><template #tab0="{ value, isActive }"><ImageCard
image="https://cgj.sz.gov.cn/images/index20230710_1.png"
    title="大浪体育公园"
    description=""
    date=""
    author="深圳政府在线"
/>
<ul>
<li>特色亮点：待更新</li>
<li>核心景观：待更新</li>
<li>设计特点：待更新</li>
<li>设施：待更新</li>
<li>功能：待更新</li>
<li>适合运动：待更新</li>
</ul>
</template><template #tab1="{ value, isActive }"><ImageCard
image="https://cgj.sz.gov.cn/images/index20230710_1.png"
    title="大浪体育公园"
    description=""
    date=""
    author="深圳政府在线"
/>
<ul>
<li>特色亮点：待更新</li>
<li>核心景观：待更新</li>
<li>设计特点：待更新</li>
<li>设施：待更新</li>
<li>功能：待更新</li>
<li>适合运动：待更新</li>
</ul>
</template></Tabs><h2 id="门票信息" tabindex="-1"><a class="header-anchor" href="#门票信息"><span>门票信息</span></a></h2>
<Tabs id="144" :data='[{"id":"票价"},{"id":"优惠政策"}]' tab-id="ticket-info">
<template #title0="{ value, isActive }">票价</template><template #title1="{ value, isActive }">优惠政策</template><template #tab0="{ value, isActive }"><ul>
<li>成人票: 免费</li>
<li>儿童/学生票: 免费</li>
<li>老年人票: 免费</li>
</ul>
</template><template #tab1="{ value, isActive }"><ul>
<li>优惠说明: 免费</li>
</ul>
</template></Tabs><h2 id="交通指南" tabindex="-1"><a class="header-anchor" href="#交通指南"><span>交通指南</span></a></h2>
<Tabs id="177" :data='[{"id":"入口位置"},{"id":"公交路线及站点"},{"id":"地铁路线及站点"},{"id":"停车场"}]' tab-id="parking-intro">
<template #title0="{ value, isActive }">入口位置</template><template #title1="{ value, isActive }">公交路线及站点</template><template #title2="{ value, isActive }">地铁路线及站点</template><template #title3="{ value, isActive }">停车场</template><template #tab0="{ value, isActive }"><ul>
<li>主入口: 待更新</li>
<li>辅入口: 待更新</li>
</ul>
</template><template #tab1="{ value, isActive }"><ul>
<li>公交站点: 待更新</li>
</ul>
</template><template #tab2="{ value, isActive }"><ul>
<li>地铁站点: 待更新</li>
</ul>
</template><template #tab3="{ value, isActive }"><ul>
<li>停车场位置: 待更新</li>
<li>是否需要提前预约: 待更新</li>
<li>车位情况: 待更新</li>
<li>停车费用: 待更新</li>
</ul>
</template></Tabs><h2 id="活动安排" tabindex="-1"><a class="header-anchor" href="#活动安排"><span>活动安排</span></a></h2>
<Tabs id="238" :data='[{"id":"定期活动"},{"id":"特别活动"},{"id":"节日活动"}]' tab-id="activities">
<template #title0="{ value, isActive }">定期活动</template><template #title1="{ value, isActive }">特别活动</template><template #title2="{ value, isActive }">节日活动</template><template #tab0="{ value, isActive }"><p>待更新</p>
</template><template #tab1="{ value, isActive }"><p>待更新</p>
</template><template #tab2="{ value, isActive }"><p>待更新</p>
</template></Tabs><h2 id="官方信息与联系方式" tabindex="-1"><a class="header-anchor" href="#官方信息与联系方式"><span>官方信息与联系方式</span></a></h2>
<Tabs id="258" :data='[{"id":"社交媒体"},{"id":"联系方式"}]' tab-id="contact-info">
<template #title0="{ value, isActive }">社交媒体</template><template #title1="{ value, isActive }">联系方式</template><template #tab0="{ value, isActive }"><ul>
<li>官方网站: 待更新</li>
<li>微信公众号: 待更新</li>
<li>微博: 待更新</li>
<li>其他社交媒体: 待更新</li>
</ul>
</template><template #tab1="{ value, isActive }"><p></p>
</template></Tabs><h2 id="设施服务" tabindex="-1"><a class="header-anchor" href="#设施服务"><span>设施服务</span></a></h2>
<Tabs id="292" :data='[{"id":"公共卫生间"},{"id":"饮水机"},{"id":"休息区"},{"id":"餐饮服务"},{"id":"儿童游乐区"},{"id":"自行车租赁"},{"id":"露营区"},{"id":"野炊区"}]' tab-id="Facility-Services">
<template #title0="{ value, isActive }">公共卫生间</template><template #title1="{ value, isActive }">饮水机</template><template #title2="{ value, isActive }">休息区</template><template #title3="{ value, isActive }">餐饮服务</template><template #title4="{ value, isActive }">儿童游乐区</template><template #title5="{ value, isActive }">自行车租赁</template><template #title6="{ value, isActive }">露营区</template><template #title7="{ value, isActive }">野炊区</template><template #tab0="{ value, isActive }"><ul>
<li>公共卫生间数量：待更新</li>
<li>公共卫生间设施：</li>
</ul>
</template><template #tab1="{ value, isActive }"><ul>
<li>饮水机数量：待更新</li>
<li>饮水机设施：</li>
</ul>
</template><template #tab2="{ value, isActive }"><ul>
<li>休息区数量：待更新</li>
<li>休息区设施：</li>
</ul>
</template><template #tab3="{ value, isActive }"><ul>
<li>餐饮服务数量：待更新</li>
<li>餐饮服务设施：</li>
</ul>
</template><template #tab4="{ value, isActive }"><ul>
<li>儿童游乐区数量：待更新</li>
<li>儿童游乐区设施：</li>
</ul>
</template><template #tab5="{ value, isActive }"><ul>
<li>自行车租赁数量：待更新</li>
<li>自行车租赁设施：</li>
</ul>
</template><template #tab6="{ value, isActive }"><ul>
<li>露营区数量：待更新</li>
<li>露营区设施：</li>
</ul>
</template><template #tab7="{ value, isActive }"><ul>
<li>野炊区数量：待更新</li>
<li>野炊区设施：</li>
</ul>
</template></Tabs><h2 id="温馨提示" tabindex="-1"><a class="header-anchor" href="#温馨提示"><span>温馨提示</span></a></h2>
<Tabs id="409" :data='[{"id":"游玩提示"},{"id":"交通提示"},{"id":"环保提示"}]' tab-id="tips">
<template #title0="{ value, isActive }">游玩提示</template><template #title1="{ value, isActive }">交通提示</template><template #title2="{ value, isActive }">环保提示</template><template #tab0="{ value, isActive }"><ul>
<li>待更新</li>
</ul>
</template><template #tab1="{ value, isActive }"><ul>
<li>待更新</li>
</ul>
</template><template #tab2="{ value, isActive }"><ul>
<li>待更新</li>
</ul>
</template></Tabs><h2 id="周边公园、景区和场馆推荐" tabindex="-1"><a class="header-anchor" href="#周边公园、景区和场馆推荐"><span>周边公园、景区和场馆推荐</span></a></h2>
<CardGrid>
  <ImageCard
        image="https://cgj.sz.gov.cn/img/4/4005/4005731/10774733.jpg"
        title="龙华公园"
        description="龙华公园于1992年正式建成，历史相对悠久。公园位于龙华区龙华街道，其占地面积20万平方米，人民北路由其一侧通过。公园山顶耸立着东江纵队革命烈士纪念碑，园内花草繁茂、景色怡人、登塔览胜，龙华全景尽收眼底，山下有现代化的游泳池、儿童乐园、综合娱乐场等文体设施。"
        href="/ComprehensivePark/Longhua Park"
        author="待更新"
        date="2025/01/02"
      />
      <ImageCard
        image="https://cgj.sz.gov.cn/img/4/4005/4005731/10774733.jpg"
        title="龙华公园"
        description="龙华公园于1992年正式建成，历史相对悠久。公园位于龙华区龙华街道，其占地面积20万平方米，人民北路由其一侧通过。公园山顶耸立着东江纵队革命烈士纪念碑，园内花草繁茂、景色怡人、登塔览胜，龙华全景尽收眼底，山下有现代化的游泳池、儿童乐园、综合娱乐场等文体设施。"
        href="/ComprehensivePark/Longhua Park"
        author="待更新"
        date="2025/01/02"
      />
    </CardGrid>
<h2 id="参考数据来源" tabindex="-1"><a class="header-anchor" href="#参考数据来源"><span>参考数据来源</span></a></h2>
<details class="hint-container details"><summary>数据来源及更新时间</summary>
<table>
<thead>
<tr>
<th>序号</th>
<th>数据标签</th>
<th>数据来源</th>
<th>更新时间</th>
</tr>
</thead>
<tbody>
<tr>
<td>[1]</td>
<td>https://cgj.sz.gov.cn/xsmh/gysz/csgy/content/post_10774732.html</td>
<td></td>
<td>2025-01-11 18:08:19</td>
</tr>
</tbody>
</table>
</details>
</div></template>


<script setup>
import ImageSwiper from '/.vuepress/theme/components/ImageSwiper.vue'
// 轮播图数据
const swiperItems = [
    {
                link: 'https://cgj.sz.gov.cn/img/4/4005/4005730/10774732.png',
                title: '大浪体育公园',
                description: '大浪体育公园位于大浪公园一路与泥头咀交叉口西南100米，占地面积3.9万平方米，始建于90年代。公园建设了老人与儿童的游乐区，同时建有篮球场且设置有护栏网，方便市民更好地运动。登山道旁设有座椅，为市民...',
                author: '深圳政府在线',
                date: '2025/01/11'
                },
  {
                link: 'https://cgj.sz.gov.cn/img/4/4005/4005730/10774732.png',
                title: '大浪体育公园',
                description: '大浪体育公园位于大浪公园一路与泥头咀交叉口西南100米，占地面积3.9万平方米，始建于90年代。公园建设了老人与儿童的游乐区，同时建有篮球场且设置有护栏网，方便市民更好地运动。登山道旁设有座椅，为市民...',
                author: '深圳政府在线',
                date: '2025/01/11'
                }
]
// 配置项
const swiperConfig = {
  height: 500,
  showInfo: true
}
</script>