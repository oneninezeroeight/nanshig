<template>
    <div>
        <div class="categroy-rgt" id="categroy-rgt">
			<dl class="categroy-child-list">
				<dt>
					<a href="https://www.nanshig.com/wap/tmpl/product_list.html?gc_id=258">
						<i class="col"></i>护肤美妆<i class="arrow-r el-icon-arrow-right">
						</i>
					</a>
				</dt>
				<dd v-for="(i,index) in tablist" :key="index">
					<a href="https://www.nanshig.com/wap/tmpl/product_list.html?gc_id=264">
						<img style="height: 70%;" :src="i.gc_image">
						<p v-text="i.gc_name"></p>
					</a>						
				</dd>
			</dl>	
			<dl class="categroy-child-list">
			</dl>
		</div>
		<div id="product_list" class="grid" style="margin-top: .57rem; display: block;">
			<p class="goods_recommend">商品推荐</p>
			<ul class="goods-secrch-list">
				<div class="nctouch-home-block item-goods">
					<ul class="goods-list">
						<li v-for="(k,index) in list" :key="index">
							<a href="product_detail.html?goods_id=227236">
								<div class="goods-pic"><img :src="k.goods_image_url" alt=""></div>
								<dl class="goods-info">
									<dt class="goods-name" v-text="k.goods_name"></dt>
									<dd class="goods-price">￥<em v-text="k.goods_price"></em></dd>
								</dl>
							</a>
						</li>
					</ul>
				</div>
			</ul>
		</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tablist:[],
            list:[]
        }
    },
    async created(){
        let tablists = await this.$axios("http://10.3.142.150:3000/tablist4");
        // console.log(tablists);
        this.tablist = tablists.data[1].class_list[0].child;
        // console.log(this.tablist);

        let lists = await this.$axios("http://10.3.142.150:3000/list4");
        // console.log(tablists);
        this.list = lists.data;
        // console.log(this.list);
        
	}
	
}
</script>

