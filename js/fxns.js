
$(function () {
    var api_key='AIzaSyCbUYf0QIevZMDVR-eOkkFOBfvjars6DVY';
    // document.getElementById('faculty_list').innerHTML='';
    var newsheetUrl='https://sheets.googleapis.com/v4/spreadsheets/1SujNKoLqCsSBCAjhRb_fHjiL7CQhT2AVHa2nOy5S6FU/values/People_faculty?alt=json&key='+api_key;
    var sheetUrl = 'https://spreadsheets.google.com/feeds/cells/1SujNKoLqCsSBCAjhRb_fHjiL7CQhT2AVHa2nOy5S6FU/1/public/full?alt=json';
    var sheetUrlGroups = 'https://spreadsheets.google.com/feeds/cells/1SujNKoLqCsSBCAjhRb_fHjiL7CQhT2AVHa2nOy5S6FU/5/public/full?alt=json';
    $.getJSON(newsheetUrl, function (data) {
        var entry = data.feed.entry;



        var people = [];
        for (var i = 12; i < entry.length; i = i + 12) {
            // entry[i].content.$t retrieves the content of each cell
            var p = new Object();
            p.type = entry[i].content.$t;
            p.name = entry[i + 1].content.$t;
            p.id = entry[i + 2].content.$t;
            p.username = entry[i + 3].content.$t;
            p.email_01 = entry[i + 4].content.$t;
            p.portfolio = entry[i + 5].content.$t;
            p.interest_areas = entry[i + 6].content.$t;
            p.designation = entry[i + 7].content.$t;
            p.phone_01 = entry[i + 8].content.$t;
            p.phone_02 = entry[i + 9].content.$t;
            p.imgurl = entry[i + 10].content.$t;
            p.groupid = entry[i + 11].content.$t;

            people.push(p);


        }

        // var out = '<ul class="list-group list-group-flush option animated fadeInUp">';
        // for (var i = 0; i < people.length; i++) {
        //     out +=
        //         '<li class="list-group-item"><img class="img-profile" src="' + people[i].imgurl + '" alt="">'
        //         + '<h5 class="mt-2">' + people[i].name + '</h5>'
        //         + ' <div class="">' + people[i].designation + '</div>'
        //         + '<div class="small mt-1  text-info">Interest Areas</div>'
        //         + '<div class="small">' + people[i].interest_areas + '</div>'
        //         + '<div class="small mt-1  text-info">Contact</div>'
        //         + '<div class="small"><span>' + people[i].username + '@iitg.ac.in</span>&nbsp<span>' + people[i].phone_01 + '</span></div>'
        //         + '<a href="' + people[i].portfolio + '"><div class="small mt-1  text-info"><b>Personal Webpage</b> </div></a></li>'

        //         ;

        // }
        // out += '</ul>';

        var out1='';    
        for (var i = 0; i < people.length; i++) {
            out1 +='<div class="card item " style="    background-color: transparent; border:0px;" data-filter-item data-filter-name="'+people[i].name+'">'
            +'<div class="box">'
            +'<img style="object-fit:cover;" height="140px" width="140px" class="rounded-circle" src="'+people[i].imgurl+'">'
            +' <h5 class="name">'+people[i].name+'</h5>'
            +'<p class="subtitle">'+people[i].designation+'</p>'
            // +'<p class="description ellipsise ">'+people[i].interest_areas+'</p>'
            +'<div class="social"><a href="'+people[i].portfolio+'"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div></div></div>'



        }

        // for (var i = 0; i < people.length; i++) {
        
        //     out1+=' <div class="col-md-4 col-lg-3 mb-2 mb-sm-4">'
        //     +' <img src="'+people[i].imgurl+'" alt="" class="w-100" style="height: auto; object-fit:cover;" width="160" height="160" >'+
            
        //     +'  <p>'+people[i].name+'</p>'
        //     +' <div class="small">'+people[i].designation+'</div></div>'
           
        // }


        document.getElementById('faculty_list').innerHTML = out1;
       

    })

    $.getJSON(sheetUrlGroups, function (data){
        var entry = data.feed.entry;
        var current_student_batches = [];
        for (var i = 4; i < entry.length; i = i + 4)
        { var g=new Object();
            g.id=entry[i].content.$t;
            g.imgurl=entry[i+1].content.$t;
            g.name=entry[i+2].content.$t;
            current_student_batches.push(g);
        }

        var student_batch='';

        for (var i = 0; i < current_student_batches.length; i++) {
                student_batch+=
                '<div class="col-lg-6 col-sm-12 animated fadeInUp" >'
               +
                '<a href="people_batch.html?id='+current_student_batches[i].id+'" style="cursor:pointer;">'
                +
                    '<div class="photo-card">'
                    +
                        '<div id="batch_pic" class="photo-background" style="background-image: url('+current_student_batches[i].imgurl+');"></div>'
                        +
                        '<div class="photo-details">'
                        +
                            '<h2 id="batch_name">'+current_student_batches[i].name+'</h2>'
                            +
                       ' </div>'
                       +
                   ' </div>'
                   +
                '</a>'
                +
           ' </div>'
        }
        document.getElementById('student_batch_list').innerHTML = student_batch;




    })

   
});


/*

	How to use:
	1)	Copy this jQuery to your project
	2)	Add [data-search] to search input
	3)	Add [data-filter-item] to the items that should be filtered
	4)	Add [data-filter-name="SEARCH TERM"] to the filter-items

*/

