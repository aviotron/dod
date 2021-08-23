

    var api_key='AIzaSyCbUYf0QIevZMDVR-eOkkFOBfvjars6DVY';
    var sheet_id='1SujNKoLqCsSBCAjhRb_fHjiL7CQhT2AVHa2nOy5S6FU';
    var faculty_tab_name='People_faculty';
    var batches_tab_name='groups';
    var baseUrl='https://sheets.googleapis.com/v4/spreadsheets/';

    var facultyRepoURL=baseUrl
    +sheet_id+'/values/'
    +faculty_tab_name+'?alt=json&key='
    +api_key;

    var groupInfoRepoURL=baseUrl
    +sheet_id+'/values/'
    +batches_tab_name+'?alt=json&key='
    +api_key;

    fetch(facultyRepoURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       
       var value_array = data.values;
      
       var people = [];
       for(var i=1; i<value_array.length;i=i+1)
       {
            var p=new Object();
           var entry=value_array[i];
            p.type = entry[0];
            p.name = entry[1] ;
            p.id = entry[2] ;
            p.username = entry[3] ;
            p.email_01 = entry[4] ;
            p.portfolio = entry[5] ;
            p.interest_areas = entry[6] ;
            p.designation = entry[7] ;
            p.phone_01 = entry[8] ;
            p.phone_02 = entry[9] ;
            p.imgurl = entry[10] ;
            p.groupid = entry[11] ;
            people.push(p);
           
       }
       console.log(people);
       appendDataFaculty(people);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


    fetch(groupInfoRepoURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       
       var value_array = data.values;
      
       var current_student_batches = [];
       for(var i=1; i<value_array.length;i=i+1)
       {
            var g=new Object();
            var entry=value_array[i];
            g.id=entry[0];
            g.imgurl=entry[1];
            g.name=entry[2];
            current_student_batches.push(g);
           
       }
       console.log(people);
       appendDataFaculty(people);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });



    function appendDataFaculty(people) {
        var out1='';    
        for (var i = 0; i < people.length; i++) {
            out1 +='<div class="card item " style="    background-color: transparent; border:0px;" data-filter-item data-filter-name="'+people[i].name+'">'
            +'<div class="box">'
            +'<img style="object-fit:cover;" height="140px" width="140px" class="rounded-circle" src="'+people[i].imgurl+'">'
            +' <h5 class="name">'+people[i].name+'</h5>'
            +'<p class="subtitle">'+people[i].designation+'</p>'
            // +'<p class="description ellipsise ">'+people[i].interest_areas+'</p>'
            +'<div class="social"><a href="'+people[i].portfolio+'"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div></div></div>';
        }
        document.getElementById('faculty_list').innerHTML = out1;
    }
   
    function appendDataBatches(current_student_batches) {
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
    }
