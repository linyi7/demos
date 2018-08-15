<template>
<div id="">
	<div class="top"></div>	
	<Problem></Problem>
	<Selfservice></Selfservice>
	<Contact></Contact>

</div>
</template>

<script type="text/javascript">
import Problem from '../components/problem'
import Contact from '../components/contact'
import Selfservice from '../components/selfservice'
export default{
 components :{
 	Problem,
 	Contact,
 	Selfservice
 }
}
</script>

<style>
.top{
		    height: 620px;
		    background-size: auto 100%;
		    background-position: 50%;
		    background-repeat: no-repeat;
		    background-image: url(http://static.smartisanos.cn/service/assets/images/top.5dc20d0b797aa46fec1a159a016751c7.jpg);
		    background-color: #131313;
		    position: relative;
		    top: -90px;
		    margin-bottom: -90px;
		}
		.content {
		    clear: both;
		    width: 1220px;
		    min-height: 600px;
		    padding: 0 0 25px;
		    margin: 0 auto;
		}
		
</style>