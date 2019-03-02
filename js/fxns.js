
$(function () {
    // document.getElementById('faculty_list').innerHTML='';
    var sheetUrl = 'https://spreadsheets.google.com/feeds/cells/1SujNKoLqCsSBCAjhRb_fHjiL7CQhT2AVHa2nOy5S6FU/1/public/full?alt=json';
    $.getJSON(sheetUrl, function (data) {
        var entry = data.feed.entry;



        var people = [];
        for (var i = 11; i < entry.length; i = i + 11) {
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
            out1 +='<div class="card item " style="    background-color: transparent; border:0px;">'
            +'<div class="box">'
            +'<img style="object-fit:cover;" height="140px" width="140px" class="rounded-circle" src="'+people[i].imgurl+'">'
            +' <h4 class="name">'+people[i].name+'</h4>'
            +'<p class="title">'+people[i].designation+'</p>'
            +'<p class="description ellipsise ">'+people[i].interest_areas+'</p>'
            +'<div class="social"><a href="'+people[i].portfolio+'"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div></div></div>'



        }




        document.getElementById('faculty_list').innerHTML = out1;
       

        console.log(people);
        var module = document.getElementsByClassName("description");

        $clamp(module, {clamp: 2});
    })
});
