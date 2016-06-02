var activeDefectDataPoints = [];
var plannedRunDataPoints = [];

function genPdf(){
	var svgElements = $("#page-content-wrapper").find('svg');

      //replace all svgs with a temp canvas
      svgElements.each(function() {
	  var canvas, xml;

		canvas = document.createElement("canvas");
		canvas.className = "screenShotTempCanvas";
		//convert SVG into a XML string
		xml = (new XMLSerializer()).serializeToString(this);

		// Removing the name space as IE throws an error
		xml = xml.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/, '');

		//draw the SVG onto a canvas
		canvg(canvas, xml);
		$(canvas).insertAfter(this);
		$(this).addClass('tempHide');
		$(this).hide();
	});
	html2canvas(document.getElementById('page-content-wrapper'), {
		onrendered: function (canvas){
			var img = canvas.toDataURL("image/jpeg",1.0);
			var doc = new jsPDF();
			doc.addImage(img, 'JPEG' , 10, 10, 180, 280);
			doc.save('test.pdf');
		}
	});
	setTimeout(function(){
		$("#page-content-wrapper").find('.screenShotTempCanvas').remove();
		$("#page-content-wrapper").find('.tempHide').show().removeClass('tempHide');
		$("#page-content-wrapper").find('.bullet').show();
	},2000);
}

function getStyle(el, styleProp) {
  var camelize = function(str) {
    return str.replace(/\-(\w)/g, function(str, letter) {
      return letter.toUpperCase();
    });
  };

  if (el.currentStyle) {
    return el.currentStyle[camelize(styleProp)];
  } else if (document.defaultView && document.defaultView.getComputedStyle) {
    return document.defaultView.getComputedStyle(el, null)
      .getPropertyValue(styleProp);
  } else {
    return el.style[camelize(styleProp)];
  }
}
window.onload = function(){
	dataUploading();
}

function dataUploading() {


	var activeDefectDataPoints = [];
	var defectClosedDataPoints = [];
	var newDefectDataPoints = [];
	var sev1Sev2DataPoints = [];
	var plannedExecutedDataPoints = [];
	var defectAgeDataPoints = [];
	var RTTDataPoints = [];
	var newDefectsDataPoints = [];
	var activeDefectsDataPoints = [];
	var peakLoadDataPoints = [];
	var normalLoadDataPoints = [];
	var allClosedDataPoints = [];
	var sev1ClosedDataPoints = [];
	var sev2ClosedDataPoints = [];
	var sev3ClosedDataPoints = [];
	var reopenedDataPoints = [];
	var upperStackDataPoints = [];
	var lowerStackDataPoints = [];
	$.ajax({
		url: '/json/data.json',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
			var margin = {top: 5, right: 40, bottom: 20, left: 75},
	          width = $('#closedActive').width() - margin.left - margin.right,
	          height = 50 - margin.top - margin.bottom;

	      var chart = d3.bullet()
	          .width(width)
	          .height(height);

	      // d3.json(data.dashboard, function(error, resp) {
	        // if (error) throw error;
	        // alert(data);
	        var svg = d3.select("#closedActive").selectAll("svg")
	            .data(data.dashboard.bullets)  
	            .enter().append("svg")
	            .attr("class", "bullet")
	            .attr("width", width + margin.left + margin.right)
	            .attr("height", height + margin.top + margin.bottom)
	          .append("g")
	            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
	            .call(chart);

	        var title = svg.append("g")  
	            .attr("x", 200)
	            .attr("y", 100)
	            .style("text-anchor", "end") 
	            .attr("transform", "translate(-6," + height / 2 + ")");

	        title.append("text")
	            .attr("class", "title")
	            .text(function(d) { return d.app; });

	        d3.selectAll("button").on("click", function() {
	          svg.datum(randomize).call(chart.duration(1000)); // TODO automatic transition
	        });
	      // });

	      function randomize(d) {
	        if (!d.randomizer) d.randomizer = randomizer(d);
	        d.ranges = d.ranges.map(d.randomizer);
	        d.markers = d.markers.map(d.randomizer);
	        return d;
	      }

	      function randomizer(d) {
	        var k = d3.max(d.ranges) * .2;
	        return function(d) {
	          return Math.max(0, d + k * (Math.random() - .5));
	        };
	      }	
			var execSummData = data.dashboard.executionSummary.appData;
			var execCurrData = data.dashboard.executionSummary.aggCurrRun;
			var execPrevData = data.dashboard.executionSummary.aggPrevRun;
			var highlightsData = data.dashboard.highlights;
			var lowlightsData = data.dashboard.lowlights;
			var topdefectsData = data.dashboard.topDefects;
			var d = execSummData.length;
			var e = execCurrData.length;
			var f = execPrevData.length;
			var g = highlightsData.length;
			var h = lowlightsData.length;
			var x = topdefectsData.length;
			var percent = [],curr_percent=[],prev_percent=[],current=[],previous=[],lastExecutionDate=[];
			var sData ="";
			var app_title = "",app_url = "",app_text = "",sPercent;
			var chartClassName="",chartName="";
			var insa = "",nc_c="",pc_c="",rc_c="",sc_c="",nc_p="",pc_p="",rc_p="",sc_p="", nlc="",plc="",rlc="",nc_ag_c="",nc_ag_p="",pc_ag_c="",pc_ag_p="",rc_ag_c="",rc_ag_p="";
			$('.total-apps').append(data.dashboard.appCount.totalApps);
			$('.smoke-apps').append(data.dashboard.appCount.smoke);
			$('.peak-apps').append(data.dashboard.appCount.pl);
			$('.normal-apps').append(data.dashboard.appCount.nl);
			for(var i=0; i<d;i++){
				$('.exec-summary').find('tbody').append('<tr class="agg-content"><td class="app-name width20"></td><td class="smoke-content dataContent width10" test="smoke"><span class="progress_bar"></span></td><td class="normal-content dataContent width10" test="normal"><span class="progress_bar"></span></td><td class="peak-content dataContent width10" test="peak"><span class="progress_bar"></span></td><td class="regression-content dataContent width10" test="regression"><span class="progress_bar"></span></td><td class="signoff-content dataContent width10" test="signoff"><span class="progress_bar"></span></td><td class="current-content width15"></td><td class="prev-content width15"></td></tr>');
			}
			for(var j=0;j<d;j++){
				sData = execSummData[j].smoke[0].status;
				if (sData == "pass") {
					sPercent = 100;
					percent.push(sPercent);
				}
				else if (sData == "fail") {
					sPercent = 0;
					percent.push(sPercent);
				}
				percent.push(parseInt(execSummData[j].normal[0].value.replace(/\%/g,'')));
				percent.push(parseInt(execSummData[j].peak[0].value.replace(/\%/g,'')));
				percent.push(parseInt(execSummData[j].regression[0].value.replace(/\%/g,'')));
				percent.push(parseInt(execSummData[j].signoff.replace(/\%/g,'')));
				lastExecutionDate.push(execSummData[j].smoke[0].lastExecutionDate);
				lastExecutionDate.push(execSummData[j].normal[0].lastExecutionDate);
				lastExecutionDate.push(execSummData[j].peak[0].lastExecutionDate);
				lastExecutionDate.push(execSummData[j].regression[0].lastExecutionDate);
				lastExecutionDate.push(execSummData[j].signoff.lastExecutionDate);
			}
			$('.app-name').each(function (index,element) {
				app_title = execSummData[index].application.toUpperCase();
				app_url = execSummData[index].appUrl;
				$(element).html('<a href="'+app_url+'" data-html="true" data-trigger="hover" data-toggle="popover" data-placement="top" data-content="Start Date : '+execSummData[index].startDate+'<br>End date : '+execSummData[index].endDate+'">'+app_title+'</a>');
			});

			$('.dataContent').each(function (index,element){
				app_text = $(element).siblings('.app-name').text().toLowerCase().replace(/ /g,'').replace(/\./g, '').replace(/[0-9]/g, '');
				chartName = app_text+$(this).attr('test');
				chartClassName=app_text+$(this).attr('test')+'container';
				$(element).children('.progress_bar').addClass(chartClassName+' pp attr filledCircle').attr({'data-val':percent[index],"data-html":"true","data-trigger":"hover","data-toggle":"popover","data-placement":"top","data-content":"<span class='hoverPercentage'>"+percent[index]+"%</span> <br> Last Execution <br> date : "+lastExecutionDate[index]});
				$('.'+chartClassName+".pp.attr.filledCircle").progressPie({mode:$.fn.progressPie.Mode.COLOR, valueData:"val", size:24, strokeWidth: 15, strokeColor: "#fff",color:'#0085c3'});
				$('[data-toggle="popover"]').popover();
			});
			$('.normal-content').each(function (index,element){
				nc_c = parseInt(execSummData[index].normal[0].current.replace(/\%/g,''));
				nc_p = parseInt(execSummData[index].normal[0].previous.replace(/\%/g,''));
				$(element).siblings('.current-content').append('<span class="ag_1 active">'+nc_c+'%</span>');
				$(element).siblings('.prev-content').append('<span class="ag_1 active">'+nc_p+'%</span>');
				if(nc_c == nc_p){			
					$(element).siblings('.current-content').children('span').append('<span class="ag_1 active">  <img src="img/svg/arrows_dot.svg" width="12"/></span>');			
				}
				else if(nc_c < nc_p){
					$(element).siblings('.current-content').children('span').append('<span class="ag_1 active">  <img src="img/svg/arrows_red.svg" width="18"/></span>');
				}
				else if(nc_c > nc_p){
					$(element).siblings('.current-content').children('span').append('<span class="ag_1 active">  <img src="img/svg/arrows_green.svg" width="18"/></span');
				}
			});
			$('.peak-content').each(function (index,element){
				pc_c = parseInt(execSummData[index].peak[0].current.replace(/\%/g,''));
				pc_p = parseInt(execSummData[index].peak[0].previous.replace(/\%/g,''));
				$(element).siblings('.current-content').append('<span class="ag_2 inactive">'+pc_c+'%</span>');
				$(element).siblings('.prev-content').append('<span class="ag_2 inactive">'+pc_p+'%</span>');
				if(pc_c == pc_p){			
					$(element).siblings('.current-content').children('span').append('<span class="ag_2 inactive">  <img src="img/svg/arrows_dot.svg" width="12"/></span>');			
				}
				else if(pc_c < pc_p){
					$(element).siblings('.current-content').children('span').append('<span class="ag_2 inactive">  <img src="img/svg/arrows_red.svg" width="18"/></span>');
				}
				else if(pc_c > pc_p){
					$(element).siblings('.current-content').children('span').append('<span class="ag_2 inactive">  <img src="img/svg/arrows_green.svg" width="18"/></span>');
				}
			});
			$('.regression-content').each(function (index,element){
				rc_c = parseInt(execSummData[index].regression[0].current.replace(/\%/g,''));
				rc_p = parseInt(execSummData[index].regression[0].previous.replace(/\%/g,''));
				$(element).siblings('.current-content').append('<span class="ag_3 inactive">'+rc_c+'%</span>');
				$(element).siblings('.prev-content').append('<span class="ag_3 inactive">'+rc_p+'%</span>');
				if(rc_c == rc_p){			
					$(element).siblings('.current-content').children('span').append('<span class="ag_3 inactive">  <img src="img/svg/arrows_dot.svg" width="12"/></span>');			
				}
				else if(rc_c < rc_p){
					$(element).siblings('.current-content').children('span').append('<span class="ag_3 inactive">  <img src="img/svg/arrows_red.svg" width="18"/></span>');
				}
				else if(rc_c > rc_p){
					$(element).siblings('.current-content').children('span').append('<span class="ag_3 inactive">  <img src="img/svg/arrows_green.svg" width="18"/></span>');
				}
			});
			$('.agg-current-percent .smoke-cur-content').each(function (index,element){
				$(element).text(execCurrData[index].smoke);
				if (execCurrData[index].smoke == execPrevData[index].smoke) {
					$(element).append('  <img src="img/svg/arrows_dot.svg" width="12"/>');
				}
				else if (execCurrData[index].smoke > execPrevData[index].smoke) {
					$(element).append('  <img src="img/svg/arrows_green.svg" width="18"/>');
				}
				else if (execCurrData[index].smoke < execPrevData[index].smoke) {
					$(element).append('  <img src="img/svg/arrows_red.svg" width="18"/>');
				}
			});
			$('.agg-current-percent .normal-cur-content').each(function (index,element) {
				nc_ag_c = parseInt(execCurrData[index].normal[0].current.replace(/\%/g,''));
				nc_ag_p = parseInt(execCurrData[index].normal[0].previous.replace(/\%/g,''));
				nlc = execCurrData[index].normal[0].value;
				$(element).text(nlc);
				$(element).siblings('.current-cur-content').append('<span class="ag_1 active">'+nc_ag_c+'%</span>');
				$(element).siblings('.prev-cur-content').append('<span class="ag_1 active">'+nc_ag_p+'%</span>');				
				if (execCurrData[index].normal[0].value == execPrevData[index].normal[0].value) {
					$(element).append('  <img src="img/svg/arrows_dot.svg" width="12"/>');
				}
				else if (execCurrData[index].normal[0].value > execPrevData[index].normal[0].value) {
					$(element).append('  <img src="img/svg/arrows_green.svg" width="18"/>');
				}
				else if (execCurrData[index].normal[0].value < execPrevData[index].normal[0].value) {
					$(element).append('  <img src="img/svg/arrows_red.svg" width="18"/>');
				}
				if (execCurrData[index].normal[0].current == execPrevData[index].normal[0].current) {
					$(element).siblings('.current-cur-content').children('span').append('<span class="ag_1 active">  <img src="img/svg/arrows_dot.svg" width="12"/></span>');
				}
				else if (execCurrData[index].normal[0].current > execPrevData[index].normal[0].current) {
					$(element).siblings('.current-cur-content').children('span').append('<span class="ag_1 active">  <img src="img/svg/arrows_green.svg" width="18"/></span>');
				}
				else if (execCurrData[index].normal[0].current < execPrevData[index].normal[0].current) {
					$(element).siblings('.current-cur-content').children('span').append('<span class="ag_1 active">  <img src="img/svg/arrows_red.svg" width="18"/></span>');
				}
				if (execCurrData[index].normal[0].previous == execPrevData[index].normal[0].previous) {
					$(element).siblings('.prev-cur-content').children('span').append('<span class="ag_1 active">  <img src="img/svg/arrows_dot.svg" width="12"/></span>');
				}
				else if (execCurrData[index].normal[0].previous > execPrevData[index].normal[0].previous) {
					$(element).siblings('.prev-cur-content').children('span').append('<span class="ag_1 active">  <img src="img/svg/arrows_green.svg" width="18"/></span>');
				}
				else if (execCurrData[index].normal[0].previous < execPrevData[index].normal[0].previous) {
					$(element).siblings('.prev-cur-content').children('span').append('<span class="ag_1 active">  <img src="img/svg/arrows_red.svg" width="18"/></span>');
				}
			});
			$('.agg-current-percent .peak-cur-content').each(function (index,element) {
				pc_ag_c = parseInt(execCurrData[index].peak[0].current.replace(/\%/g,''));
				pc_ag_p = parseInt(execCurrData[index].peak[0].previous.replace(/\%/g,''));
				plc = execCurrData[index].peak[0].value;
				$(element).text(plc);
				$(element).siblings('.current-cur-content').append('<span class="ag_2 inactive">'+pc_ag_c+'%</span>');
				$(element).siblings('.prev-cur-content').append('<span class="ag_2 inactive">'+pc_ag_p+'%</span>');
				if (execCurrData[index].peak[0].value == execPrevData[index].peak[0].value) {
					$(element).append('  <img src="img/svg/arrows_dot.svg" width="12"/>');
				}
				else if (execCurrData[index].peak[0].value > execPrevData[index].peak[0].value) {
					$(element).append('  <img src="img/svg/arrows_green.svg" width="18"/>');
				}
				else if (execCurrData[index].peak[0].value < execPrevData[index].peak[0].value) {
					$(element).append('  <img src="img/svg/arrows_red.svg" width="18"/>');
				}
				if (execCurrData[index].peak[0].current == execPrevData[index].peak[0].current) {
					$(element).siblings('.current-cur-content').children('span').append('<span class="ag_2 inactive">  <img src="img/svg/arrows_dot.svg" width="12"/></span>');
				}
				else if (execCurrData[index].peak[0].current > execPrevData[index].peak[0].current) {
					$(element).siblings('.current-cur-content').children('span').append('<span class="ag_2 inactive">  <img src="img/svg/arrows_green.svg" width="18"/></span>');
				}
				else if (execCurrData[index].peak[0].current < execPrevData[index].peak[0].current) {
					$(element).siblings('.current-cur-content').children('span').append('<span class="ag_2 inactive">  <img src="img/svg/arrows_red.svg" width="18"/></span>');
				}
				if (execCurrData[index].peak[0].previous == execPrevData[index].peak[0].previous) {
					$(element).siblings('.prev-cur-content').children('span').append('<span class="ag_2 inactive">  <img src="img/svg/arrows_dot.svg" width="12"/></span>');
				}
				else if (execCurrData[index].peak[0].previous > execPrevData[index].peak[0].previous) {
					$(element).siblings('.prev-cur-content').children('span').append('<span class="ag_2 inactive">  <img src="img/svg/arrows_green.svg" width="18"/></span>');
				}
				else if (execCurrData[index].peak[0].previous < execPrevData[index].peak[0].previous) {
					$(element).siblings('.prev-cur-content').children('span').append('<span class="ag_2 inactive">  <img src="img/svg/arrows_red.svg" width="18"/></span>');
				}
			});
			$('.agg-current-percent .regression-cur-content').each(function (index,element) {
				rc_ag_c = parseInt(execCurrData[index].regression[0].current.replace(/\%/g,''));
				rc_ag_p = parseInt(execCurrData[index].regression[0].previous.replace(/\%/g,''));
				rlc = execCurrData[index].regression[0].value;
				$(element).text(rlc);
				$(element).siblings('.current-cur-content').append('<span class="ag_3 inactive">'+rc_ag_c+'%</span>');
				$(element).siblings('.prev-cur-content').append('<span class="ag_3 inactive">'+rc_ag_p+'%</span>');
				if (execCurrData[index].regression[0].value == execPrevData[index].regression[0].value) {
					$(element).append('  <img src="img/svg/arrows_dot.svg" width="12"/>');
				}
				else if (execCurrData[index].regression[0].value > execPrevData[index].regression[0].value) {
					$(element).append('  <img src="img/svg/arrows_green.svg" width="18"/>');
				}
				else if (execCurrData[index].regression[0].value < execPrevData[index].regression[0].value) {
					$(element).append('  <img src="img/svg/arrows_red.svg" width="18"/>');
				}
				if (execCurrData[index].regression[0].current == execPrevData[index].regression[0].current) {
					$(element).siblings('.current-cur-content').children('span').append('<span class="ag_3 inactive">  <img src="img/svg/arrows_dot.svg" width="12"/></span>');
				}
				else if (execCurrData[index].regression[0].current > execPrevData[index].regression[0].current) {
					$(element).siblings('.current-cur-content').children('span').append('<span class="ag_3 inactive">  <img src="img/svg/arrows_green.svg" width="18"/></span>');
				}
				else if (execCurrData[index].regression[0].current < execPrevData[index].regression[0].current) {
					$(element).siblings('.current-cur-content').children('span').append('<span class="ag_3 inactive">  <img src="img/svg/arrows_red.svg" width="18"/></span>');
				}
				if (execCurrData[index].regression[0].previous == execPrevData[index].regression[0].previous) {
					$(element).siblings('.prev-cur-content').children('span').append('<span class="ag_3 inactive">  <img src="img/svg/arrows_dot.svg" width="12"/></span>');
				}
				else if (execCurrData[index].regression[0].previous > execPrevData[index].regression[0].previous) {
					$(element).siblings('.prev-cur-content').children('span').append('<span class="ag_3 inactive">  <img src="img/svg/arrows_green.svg" width="18"/></span>');
				}
				else if (execCurrData[index].regression[0].previous < execPrevData[index].regression[0].previous) {
					$(element).siblings('.prev-cur-content').children('span').append('<span class="ag_3 inactive">  <img src="img/svg/arrows_red.svg" width="18"/></span>');
				}
			});
			$('.agg-current-percent .signoff-cur-content').each(function (index,element){
				$(element).text(execCurrData[index].signoff);
				if (execCurrData[index].signoff == execPrevData[index].signoff) {
					$(element).append('  <img src="img/svg/arrows_dot.svg" width="12"/>');
				}
				else if (execCurrData[index].signoff > execPrevData[index].signoff) {
					$(element).append('  <img src="img/svg/arrows_green.svg" width="18"/>');
				}
				else if (execCurrData[index].signoff < execPrevData[index].signoff) {
					$(element).append('~');
				}
			});
			$('.agg-previous-percent .smoke-cur-content').each(function (index,element){
				$(element).text(execPrevData[index].smoke);
			});
			$('.agg-previous-percent .normal-cur-content').each(function (index,element) {
				nc_ag_c = parseInt(execPrevData[index].normal[0].current.replace(/\%/g,''));
				nc_ag_p = parseInt(execPrevData[index].normal[0].previous.replace(/\%/g,''));
				nlc = execPrevData[index].normal[0].value;
				$(element).text(nlc);
				$(element).siblings('.current-cur-content').append('<span class="ag_1 active">'+nc_ag_c+'%</span>');
				$(element).siblings('.prev-cur-content').append('<span class="ag_1 active">'+nc_ag_p+'%</span>');
			});
			$('.agg-previous-percent .peak-cur-content').each(function (index,element) {
				pc_ag_c = parseInt(execPrevData[index].peak[0].current.replace(/\%/g,''));
				pc_ag_p = parseInt(execPrevData[index].peak[0].previous.replace(/\%/g,''));
				plc = execPrevData[index].peak[0].value;
				$(element).text(plc);
				$(element).siblings('.current-cur-content').append('<span class="ag_2 inactive">'+pc_ag_c+'%</span>');
				$(element).siblings('.prev-cur-content').append('<span class="ag_2 inactive">'+pc_ag_p+'%</span>');
			});
			$('.agg-previous-percent .regression-cur-content').each(function (index,element) {
				rc_ag_c = parseInt(execPrevData[index].regression[0].current.replace(/\%/g,''));
				rc_ag_p = parseInt(execPrevData[index].regression[0].previous.replace(/\%/g,''));
				rlc = execPrevData[index].regression[0].value;
				$(element).text(rlc);
				$(element).siblings('.current-cur-content').append('<span class="ag_3 inactive">'+rc_ag_c+'%</span>');
				$(element).siblings('.prev-cur-content').append('<span class="ag_3 inactive">'+rc_ag_p+'%</span>');
			});
			$('.agg-previous-percent .signoff-cur-content').each(function (index,element){
				$(element).text(execPrevData[index].signoff);
			});
			$('.sort-header').on('click',function(){
			  if($(this).hasClass('normal-header')){
			    $('.ag_1').removeClass('inactive').addClass('active').siblings('span').addClass('inactive');
			  }
			  if($(this).hasClass('peak-header')){
			    $('.ag_2').removeClass('inactive').addClass('active').siblings('span').addClass('inactive');
			  }
			  if($(this).hasClass('regression-header')){
			    $('.ag_3').removeClass('inactive').addClass('active').siblings('span').addClass('inactive');
			  }
			});
			for(var l=0;l<g;l++){
				$('.highlights-cont').append("<div class='top-defect-container'><div class='top-defect-row3 highlights-text'>"+highlightsData[l].highlight+"</div><div class='top-defect-row2 highlights-date'>"+highlightsData[l].date+"</div></div>");
			}
			for(var m=0;m<h;m++){
				$('.lowlights-cont').append("<div class='top-defect-container'><div class='top-defect-row3 highlights-text'>"+lowlightsData[m].lowlight+"</div><div class='top-defect-row2 highlights-date'>"+lowlightsData[m].date+"</div></div>");
			}
			for(var n=0;n<x;n++){
				$('.top-defects-cont').append("<div class='top-defect-container'><div class='top-defect-row1'><span class='defect-app-name'>"+topdefectsData[n].project+"</span><span> | </span><span class='defect-id'>DEFECT: "+topdefectsData[n].defectID+"</span><span> | </span><span class='defect-type'>"+topdefectsData[n].Severity+"</span></div><div class='top-defect-row2 tenMarginTop'><span>ETA: "+topdefectsData[n].eta+"</span></div><div class='top-defect-row3 tenMarginTop'><p>"+topdefectsData[n].description+"</p></div></div>")
			}
			for (var i = 0; i < data.dashboard.aggTrends[0].dataPoints.length; i++) {
            activeDefectDataPoints.push({ x: new Date(data.dashboard.aggTrends[0].dataPoints[i].x), y: data.dashboard.aggTrends[0].dataPoints[i].y });
            defectClosedDataPoints.push({ x: new Date(data.dashboard.aggTrends[1].dataPoints[i].x), y: data.dashboard.aggTrends[1].dataPoints[i].y });
            newDefectDataPoints.push({ x: new Date(data.dashboard.aggTrends[1].dataPoints[i].x), y: data.dashboard.aggTrends[1].dataPoints[i].y });
            sev1Sev2DataPoints.push({ x: new Date(data.dashboard.aggTrends[1].dataPoints[i].x), y: data.dashboard.aggTrends[1].dataPoints[i].y });
            plannedExecutedDataPoints.push({ x: new Date(data.dashboard.aggTrends[1].dataPoints[i].x), y: data.dashboard.aggTrends[1].dataPoints[i].y });
            defectAgeDataPoints.push({ x: new Date(data.dashboard.aggTrends[1].dataPoints[i].x), y: data.dashboard.aggTrends[1].dataPoints[i].y });
            //flightPathDataPoints.push({ x: new Date(data.dashboard.aggTrends[1].dataPoints[i].x), y: data.dashboard.aggTrends[1].dataPoints[i].y });
        }

        for (var i = 0; i < data.dashboard.flightPath.data[0].dataPoints.length; i++) {
            RTTDataPoints.push({ x: new Date(data.dashboard.flightPath.data[0].dataPoints[i].x), y: data.dashboard.flightPath.data[0].dataPoints[i].y });
            newDefectsDataPoints.push({ x: new Date(data.dashboard.flightPath.data[1].dataPoints[i].x), y: data.dashboard.flightPath.data[1].dataPoints[i].y });
            activeDefectsDataPoints.push({ x: new Date(data.dashboard.flightPath.data[2].dataPoints[i].x), y: data.dashboard.flightPath.data[2].dataPoints[i].y });
            peakLoadDataPoints.push({ x: new Date(data.dashboard.perfTren.data[0].dataPoints[i].x), y: data.dashboard.perfTren.data[0].dataPoints[i].y });
            normalLoadDataPoints.push({ x: new Date(data.dashboard.perfTren.data[1].dataPoints[i].x), y: data.dashboard.perfTren.data[1].dataPoints[i].y });
            allClosedDataPoints.push({ x: new Date(data.dashboard.closedDefects.data[0].dataPoints[i].x), y: data.dashboard.closedDefects.data[0].dataPoints[i].y });
            sev1ClosedDataPoints.push({ x: new Date(data.dashboard.closedDefects.data[1].dataPoints[i].x), y: data.dashboard.closedDefects.data[1].dataPoints[i].y });
            sev2ClosedDataPoints.push({ x: new Date(data.dashboard.closedDefects.data[2].dataPoints[i].x), y: data.dashboard.closedDefects.data[2].dataPoints[i].y });
            sev3ClosedDataPoints.push({ x: new Date(data.dashboard.closedDefects.data[3].dataPoints[i].x), y: data.dashboard.closedDefects.data[3].dataPoints[i].y });
            reopenedDataPoints.push({ x: new Date(data.dashboard.reopenedDefects.data[0].dataPoints[i].x), y: data.dashboard.reopenedDefects.data[0].dataPoints[i].y });
        }

        for (var i = 0; i < data.dashboard.defectType.data[0].dataPoints.length; i++) {
        	upperStackDataPoints.push({ label: data.dashboard.defectType.data[0].dataPoints[i].label, y: data.dashboard.defectType.data[0].dataPoints[i].y, color: data.dashboard.defectType.data[0].dataPoints[i].color });
        	lowerStackDataPoints.push({ label: data.dashboard.defectType.data[1].dataPoints[i].label, y: data.dashboard.defectType.data[1].dataPoints[i].y, });
        }
	
		// Chart with label + y values
		// Active Defects
	    var activeDefect = new CanvasJS.Chart("activeDefect",
		{
			animationEnabled: true,
	        axisX:{      
	            interval: 3,
	            gridThickness: 0,
	            tickThickness: 0
	            // labelAngle : 30,
	            // valueFormatString: "HHmm'hrs'"

	        },
	        axisY:{      
	            gridThickness: 0,
	            tickThickness: 0
	            // labelAngle : 30,
	            // valueFormatString: "HHmm'hrs'"

	        },
	        toolTip:{
	            enabled: false
	        },
	        legend: {
	            verticalAlign: "bottom",
	            horizontalAlign: "center"
	        },
			data: [
			{
				markerSize: 2,
	            markerType: 'none',
	            type: "area",
				dataPoints: activeDefectDataPoints
			}]
		});
		activeDefect.render();

		var defectClosed = new CanvasJS.Chart("defectClosed",
		{
			animationEnabled: true,
	        axisX:{      
	            interval: 3,
	            gridThickness: 0,
	            tickThickness: 0
	            // labelAngle : 30,
	            // valueFormatString: "HHmm'hrs'"

	        },
	        axisY:{      
	            gridThickness: 0,
	            tickThickness: 0
	            // labelAngle : 30,
	            // valueFormatString: "HHmm'hrs'"

	        },
	        toolTip:{
	            enabled: false
	        },
	        legend: {
	            verticalAlign: "bottom",
	            horizontalAlign: "center"
	        },
			data: [
			{
				markerSize: 2,
	            markerType: 'none',
	            type: "area",
				dataPoints: defectClosedDataPoints
			}]
		});
		defectClosed.render();

		// New Defects Graph
		var newDefect = new CanvasJS.Chart("newDefect",
		    {
		        animationEnabled: true,
		        axisX:{      
		            interval: 3,
		            gridThickness: 0,
		            tickThickness: 0
		            // labelAngle : 30,
		            // valueFormatString: "HHmm'hrs'"

		        },
		        axisY:{      
		            gridThickness: 0,
		            tickThickness: 0
		            // labelAngle : 30,
		            // valueFormatString: "HHmm'hrs'"

		        },
		        toolTip:{
		            enabled: false
		        },
		        legend: {
		            verticalAlign: "bottom",
		            horizontalAlign: "center"
		        },

		        data: [
		        {        
		            markerSize: 2,
		            markerType: 'none',
		            type: "area",
		            dataPoints: newDefectDataPoints
		        }
		        ]
		    });

		newDefect.render();

		var sev1Sev2 = new CanvasJS.Chart("sev1Sev2",
		    {
		        animationEnabled: true,
		        axisX:{      
		            interval: 3,
		            gridThickness: 0,
		            tickThickness: 0
		            // labelAngle : 30,
		            // valueFormatString: "HHmm'hrs'"

		        },
		        axisY:{      
		            gridThickness: 0,
		            tickThickness: 0
		            // labelAngle : 30,
		            // valueFormatString: "HHmm'hrs'"

		        },
		        toolTip:{
		            enabled: false
		        },
		        legend: {
		            verticalAlign: "bottom",
		            horizontalAlign: "center"
		        },

		        data: [
		        {        
		            markerSize: 2,
		            markerType: 'none',
		            type: "area",
		            dataPoints: sev1Sev2DataPoints
		        }
		        ]
		    });

		sev1Sev2.render();

		var plannedExecuted = new CanvasJS.Chart("plannedExecuted",
		    {
		        animationEnabled: true,
		        axisX:{      
		            interval: 3,
		            gridThickness: 0,
		            tickThickness: 0
		            // labelAngle : 30,
		            // valueFormatString: "HHmm'hrs'"

		        },
		        axisY:{      
		            gridThickness: 0,
		            tickThickness: 0
		            // labelAngle : 30,
		            // valueFormatString: "HHmm'hrs'"

		        },
		        toolTip:{
		            enabled: false
		        },
		        legend: {
		            verticalAlign: "bottom",
		            horizontalAlign: "center"
		        },

		        data: [
		        {        
		            markerSize: 2,
		            markerType: 'none',
		            type: "area",
		            dataPoints: plannedExecutedDataPoints
		        }
		        ]
		    });

		plannedExecuted.render();


		var defectAge = new CanvasJS.Chart("defectAge",
		    {
		        animationEnabled: true,
		        axisX:{      
		            interval: 3,
		            gridThickness: 0,
		            tickThickness: 0
		            // labelAngle : 30,
		            // valueFormatString: "HHmm'hrs'"

		        },
		        axisY:{      
		            gridThickness: 0,
		            tickThickness: 0
		            // labelAngle : 30,
		            // valueFormatString: "HHmm'hrs'"

		        },
		        toolTip:{
		            enabled: false
		        },
		        legend: {
		            verticalAlign: "bottom",
		            horizontalAlign: "center"
		        },

		        data: [
		        {        
		            markerSize: 2,
		            markerType: 'none',
		            type: "area",
		            dataPoints: defectAgeDataPoints
		        }
		        ]
		    });

		defectAge.render();

		var testProgress = new CanvasJS.Chart("testProgress",
		    {
		        animationEnabled: true,
	            axisX:{

	                gridColor: "#EAEAEC",
	                tickColor: "silver",
	                gridThickness: 1,
	                lineThickness: 1,
	                tickThickness: 0,
	                includeZero: false,
	                lineColor: "#E6E5EB",

	            },
	            theme: "theme2",
	            axisY: {
	                gridColor: "#EAEAEC",
	                tickColor: "silver",
	                gridThickness: 1,
	                lineThickness: 1,
	                tickThickness: 0,
	                minimum: 0,
	                includeZero: false,
	                lineColor: "#E6E5EB",
	            },
	            legend:{
	                verticalAlign: "bottom",
	                horizontalAlign: "right"
	            },
		        data: [
		        {        
		            name: "RTT",
		            showInLegend: true,
		            legendMarkerType: "square",
		            type: "area",
		            markerSize: 8,
		            color:'#76dc89',
		            markerColor: '#91e3a1',
		            fillOpacity: .3,
		            lineThickness: 2,
		            dataPoints: RTTDataPoints
		        },
		        {        
		            name: "New Defects",
		            legendMarkerType: 'square',
		            showInLegend: true,
		            type: "area",
		            markerSize: 8,
		            color:'#7da2f5',
		            markerColor: '#7da2f5',
		            lineThickness: 2,
		            fillOpacity: .3,
		            dataPoints: newDefectsDataPoints
		        },
		        {        
		            name: "Active Defects",
		            legendMarkerType: 'square',
		            showInLegend: true,
		            type: "area",
		            markerSize: 8,
		            color:'#E62117',
		            markerColor: '#E62117',
		            lineThickness: 2,
		            fillOpacity: .3,
		            dataPoints: activeDefectsDataPoints
		        }
		        ]
		    });

		testProgress.render();

		var activeDefects = new CanvasJS.Chart("activeDefects",
		    {
		        animationEnabled: true,
		        axisX:{

		            gridColor: "#EAEAEC",
		            tickColor: "silver",
		            valueFormatString: "DD, MMM",
		            gridThickness: 1,
		            lineThickness: 1,
		            tickThickness: 0,
		            includeZero: false,
		            gridDashType: "dash",
		            lineColor: "#E6E5EB",
		            lineDashType: "dash"

		        },
		        theme: "theme2",
		        axisY: {
		            gridColor: "#EAEAEC",
		            tickColor: "silver",
		            gridThickness: 1,
		            lineThickness: 1,
		            tickThickness: 0,
		            minimum: 0,
		            includeZero: false,
		            gridDashType: "dash",
		            lineColor: "#E6E5EB",
		            lineDashType: "dash"
		        },
		        legend:{
		            verticalAlign: "bottom",
		            horizontalAlign: "right"
		        },
		        data: [
		        {        
		            type: "line",
	                markerType: "none",
	                color: '#1cbbb4',
	                name: 'Monthly',
	                showInLegend: true,
		            dataPoints: peakLoadDataPoints
		        },
		        {        
		            type: "line",
	                markerType: "none",
	                color: '#f26e7e',
	                name: 'Daily',
	                showInLegend: true,
		            dataPoints: normalLoadDataPoints
		        }
		        ]
		    });

		activeDefects.render();


		var closedDefects = new CanvasJS.Chart("closedDefects",
		    {
		        animationEnabled: true,
	            axisX:{

	                gridColor: "#EAEAEC",
	                tickColor: "silver",
	                valueFormatString: "MMM",
	                gridThickness: 1,
	                lineThickness: 1,
	                tickThickness: 0,
	                includeZero: false,
	                gridDashType: "dash",
	                lineColor: "#E6E5EB",
	                lineDashType: "dash"

	            },
	            theme: "theme2",
	            axisY: {
	                gridColor: "#EAEAEC",
	                tickColor: "silver",
	                gridThickness: 1,
	                lineThickness: 1,
	                tickThickness: 0,
	                minimum: 0,
	                includeZero: false,
	                gridDashType: "dash",
	                lineColor: "#E6E5EB",
	                lineDashType: "dash"
	            },
	            legend:{
	                verticalAlign: "bottom",
	                horizontalAlign: "right"
	            },
		        data: [
		        {        
		            type: "line",
	                showInLegend: true,
	                lineThickness: 2,
	                name: "All",
	                markerType: "none",
	                color: "#4ac9c3",
		            dataPoints: allClosedDataPoints
		        },
		        {        
		            type: "line",
	                showInLegend: true,
	                name: "Sev1",
	                color: "#ffd34e",
	                lineThickness: 2,
	                markerType: "none",
		            dataPoints: sev1ClosedDataPoints
		        },
		        {        
		            type: "line",
		            showInLegend: true,
	                name: "Sev2",
	                color: "#ff2d00",
	                lineThickness: 2,
	                markerType: "none",
		            dataPoints: sev2ClosedDataPoints
		        },
		        {        
		            type: "line",
	                showInLegend: true,
	                name: "Sev3",
	                color: "#a59fa3",
	                lineThickness: 2,
	                markerType: "none",
		            dataPoints: sev3ClosedDataPoints
		        }
		        ]
		    });

		closedDefects.render();

		var ageDefects = new CanvasJS.Chart("ageDefects",
        {
            animationEnabled: true,
            axisX:{

                gridColor: "#EAEAEC",
                tickColor: "silver",
                gridThickness: 0,
                lineThickness: 1,
                tickThickness: 0,
                includeZero: false,
                gridDashType: "dash",
                lineColor: "#E6E5EB",
                valueFormatString: "hh"

            },
            theme: "theme2",
            axisY: {
                gridColor: "#EAEAEC",
                tickColor: "silver",
                gridThickness: 1,
                lineThickness: 1,
                tickThickness: 0,
                minimum: 0,
                includeZero: false,
                gridDashType: "dash",
                lineColor: "#E6E5EB",
            },
            legend:{
                verticalAlign: "bottom",
                horizontalAlign: "right"
            },
            data: [
                {
                    color: "#FFFF00",
                    showInLegend: true,
                    name: "Reopened",
                    dataPoints: reopenedDataPoints
                }
            ]
        });

		ageDefects.render();

		var defectsType = new CanvasJS.Chart("defectsType",
        {
            animationEnabled: true,
            axisX:{

                gridColor: "#EAEAEC",
                tickColor: "silver",
                gridThickness: 0,
                lineThickness: 1,
                tickThickness: 0,
                includeZero: false,
                gridDashType: "dash",
                lineColor: "#E6E5EB",
                valueFormatString: "hh"

            },
            theme: "theme2",
            axisY: {
                gridColor: "#EAEAEC",
                tickColor: "silver",
                gridThickness: 1,
                lineThickness: 1,
                tickThickness: 0,
                minimum: 0,
                includeZero: false,
                gridDashType: "dash",
                lineColor: "#E6E5EB",
            },
            legend:{
                verticalAlign: "bottom",
                horizontalAlign: "right"
            },
            data: [
                {
                	type: "stackedColumn",
                    name: "Reopened",
                    dataPoints: upperStackDataPoints
                },
                {
                	type: "stackedColumn",
                    color: "#0085C3",
                    name: "Reopened",
                    dataPoints: lowerStackDataPoints
                }
            ]
        });

		defectsType.render();
		},
		error: function() {
			$('#info').html('<p>An error has occurred</p>');
		}
	});

}