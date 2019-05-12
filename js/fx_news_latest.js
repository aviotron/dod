$(function () {
    // document.getElementById('faculty_list').innerHTML='';
    var sheetUrl = 'https://spreadsheets.google.com/feeds/cells/1SujNKoLqCsSBCAjhRb_fHjiL7CQhT2AVHa2nOy5S6FU/9/public/full?alt=json';
    $.getJSON(sheetUrl, function (data) {
        var entry = data.feed.entry;




        var news = [];
        for (var i = 6; i < entry.length; i = i + 6) {
            // entry[i].content.$t retrieves the content of each cell
            var p = new Object();
            var n = new Object();

            n.id = entry[i].content.$t;
            n.title = entry[i + 1].content.$t;
            n.importance = entry[i + 2].content.$t;
            n.type = entry[i + 3].content.$t;
            n.posted_on = entry[i + 4].content.$t;
            n.imgurl = entry[i + 5].content.$t;



            news.push(n);



        }

        console.log(news);

        var out =
            '   <div class="event no-gutters mr-md-2 ml-md-2 event-primary">' +
            '<img src="'+ news[0].imgurl+'" alt="" class="img-fluid img-event col " height="20rem">' +
            '<div class="div event-bg">' +
            ' <p class="event-date ml-3 pt-2">'+news[0].posted_on+'</p>' +
            '<h4 class="event-title pl-2 pr-2 ml-2 mr-2 mt-n2">'+news[0].title +
            ' </h4>' +
            '<p class=" ml-1 p-2 pb-3"><span class="event-type">'+news[0].type+'</span> </p>' +
            ' </div>' +

            ' </div>';
            document.getElementById('news-one').innerHTML = out;



        // var out1 =
        //     '<div class="row  option animated fadeInUp"><div class="col-lg-10 mx-auto"><div class="card-columns people">';



        // for (var i = 0; i < people.length; i++) {
        //     out1 += '<a href="people-profile.html"><div class="card item " style="background-color: transparent; border:0px;">'
        //         + '<div class="box">'
        //         + '<img style="object-fit:cover;" height="140px" width="140px" class="rounded-circle lazy" src="img/face-profile.svg" data-src="' + people[i].imgurl + ' ">'
        //         + ' <h4 class="name">' + people[i].name + '</h4>'
        //         + '<p class="title">' + people[i].id + '</p>'
        //         + '<p class="description ellipsise ">' + people[i].interest_areas + '</p>'
        //         + '<div class="social"><a href="' + people[i].portfolio + '"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div></div></div>'



        // }

        // out1 += '</div></div></a></div>';




        // document.getElementById('batch_member_list').innerHTML = out1;
        // var lazyLoadInstance = new LazyLoad({
        //     elements_selector: ".lazy"

        // });

        // if (lazyLoadInstance) {
        //     lazyLoadInstance.update();
        // }

    })
});
