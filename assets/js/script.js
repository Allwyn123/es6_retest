/* create obj start */
let question_obj = [
    {"question":"Which one of the following river flows between Vindhyan and Satpura ranges",
        "option": ["Narmada","Mahanadi","Son","Netravati"],
        "answer": "Narmada"
    },
    {"question":"The Central Rice Research Station is situated in",
        "option": ["Chennai","Cuttack","Bangalore","Quilon"],
        "answer": "Cuttack"
    },
    {"question":"Who among the following wrote Sanskrit grammar",
        "option": ["Kalidasa","Charak","Panini","Aryabhatt"],
        "answer": "Panini"
    },
    {"question":"Which among the following headstreams meets the Ganges in last",
        "option": ["Alaknanda","Pindar","Mandakini","Bhagirathi"],
        "answer": "Bhagirathi"
    },
    {"question":"The metal whose salts are sensitive to light is",
        "option": ["Zinc","Silver","Copper","Aluminum"],
        "answer": "Silver"
    },
    {"question":"Patanjali is well known for the compilation of",
        "option": ["Yoga Sutra","Panchatantra","Brahma Sutra","Ayurveda"],
        "answer": "Yoga Sutra"
    },
    {"question":"River Luni originates near Pushkar and drains into which one of the following",
        "option": ["Rann of Kachchh","Arabian Sea","Gulf of Cambay","Lake Sambhar"],
        "answer": "Rann of Kachchh"
    },
    {"question":"Which one of the following rivers originates in Brahmagiri range of Western Ghats",
        "option": ["Pennar","Cauvery","Krishna","Tapti"],
        "answer": "Cauvery"
    },
    {"question":"The country that has the highest in Barley Production",
        "option": ["China","India","Russia","France"],
        "answer": "Russia"
    },
    {"question":"Tsunamis are not caused by",
        "option": ["Hurricanes","Earthquakes","Undersea landslides","Volcanic eruptions"],
        "answer": "Hurricanes"
    },
];

let answer_obj = [];

/* create obj end */

const start_btn = document.querySelector(".start_btn");
const previous_btn = document.querySelector(".previous_btn");
const next_btn = document.querySelector(".next_btn");
const submit_btn = document.querySelector(".submit_btn");
const question_box = document.querySelector(".question_box");
const question_panel = document.querySelector(".question_panel");

start_btn.addEventListener("click", () => {
    start_btn.classList.add("hide");
    start_timer();
    question_func(0);
});

let question_func = (q) => {
    question_box.innerHTML = "";
    question_box.classList.add("display");
    
    function set_attribute(element, attribute) {
        Object.keys(attribute).forEach(e => {
            element.setAttribute(e, attribute[e]);
        });
    }
    
    let p_element = document.createElement("p");
    p_element.innerHTML = `${q+1}. ${question_obj[q].question}?`;
    let form_element = document.createElement("form");
    let input_attribute = "";
    
    let option1_element = document.createElement("input");
    let option1_label = document.createElement("label");
    option1_label.setAttribute("for", "option1");
    option1_label.innerHTML = question_obj[q].option[0];
    input_attribute = {
        type: "radio",
        name: "choice",
        id: "option1",
        class: "option",
        value: question_obj[q].option[0],
    }
    set_attribute(option1_element, input_attribute);
    

    let option2_element = document.createElement("input");
    let option2_label = document.createElement("label");
    option2_label.setAttribute("for", "option2");
    option2_label.innerHTML = question_obj[q].option[1];
    input_attribute = {
        type: "radio",
        name: "choice",
        id: "option2",
        class: "option",
        value: question_obj[q].option[1],
    }
    set_attribute(option2_element, input_attribute);

    let option3_element = document.createElement("input");
    let option3_label = document.createElement("label");
    option3_label.setAttribute("for", "option3");
    option3_label.innerHTML = question_obj[q].option[2];
    input_attribute = {
        type: "radio",
        name: "choice",
        id: "option3",
        class: "option",
        value: question_obj[q].option[2],
    }
    set_attribute(option3_element, input_attribute);

    let option4_element = document.createElement("input");
    let option4_label = document.createElement("label");
    option4_label.setAttribute("for", "option4");
    option4_label.innerHTML = question_obj[q].option[3];
    input_attribute = {
        type: "radio",
        name: "choice",
        id: "option4",
        class: "option",
        value: question_obj[q].option[3],
    }
    set_attribute(option4_element, input_attribute);

    form_element.append(option1_element);
    form_element.append(option1_label);
    form_element.append(option2_element);
    form_element.append(option2_label);
    form_element.append(option3_element);
    form_element.append(option3_label);
    form_element.append(option4_element);
    form_element.append(option4_label);
    question_box.appendChild(p_element);
    question_box.appendChild(form_element);

    display_button(q);

    previous_btn.addEventListener("click", () => {
        q--;
        question_func(q);
    });
    
    next_btn.addEventListener("click", () => {
        q++;
        let options = document.querySelectorAll(".option");
        options.forEach(e => {
            if(e.checked) {
                if(answer_obj != "") {
                    for( let i = 0; i < answer_obj.length; i++) {
                        if(answer_obj[i].q_nos == q) {
                            answer_obj.splice(i,1);
                        }
                    }
                }
                let value = {"q_nos": q,"ans": e.value};
                answer_obj.push(value);
            }
        });
        question_func(q);
    });

    submit_btn.addEventListener("click", () => {
        let options = document.querySelectorAll(".option");
        options.forEach(e => {
            if(e.checked) {
                if(answer_obj != "") {
                    for( let i = 0; i < answer_obj.length; i++) {
                        if(answer_obj[i].q_nos == q) {
                            answer_obj.splice(i,1);
                        }
                    }
                }
                let value = {"q_nos": q,"ans": e.value};
                answer_obj.push(value);
            }
        });
        submit_func();
    });
}

let display_button = (q) => {
    if(q == 0) {
        next_btn.classList.add("display_btn");
        previous_btn.classList.remove("display_btn");
    }
    else if(q > 0) {
        if(q == question_obj.length-1) {
            next_btn.classList.remove("display_btn");
            submit_btn.classList.add("display_btn");
        }
        else {
            next_btn.classList.add("display_btn");
            previous_btn.classList.add("display_btn");
            submit_btn.classList.remove("display_btn");
        }
    }
}

/*--------- submit start --------- */
let submit_func = () => {
    const result_box = document.querySelector(".result_box");
    let res_score = 0;
    for(let i = 0; i < question_obj.length; i++) {
        for(let j = 0; j < answer_obj.length; j++) {
            if(i == answer_obj[j].q_nos-1) {
                if(question_obj[i].answer == answer_obj[j].ans) {
                    res_score += 1;
                }
            }
        }
    }
    result_box.classList.add("flex");
    question_panel.classList.add("hide");
    let res_display = document.querySelector(".res_display");
    res_display.innerHTML = "";
    res_display.innerHTML = res_score*10+"%";
}
/*--------- submit end --------- */

let reset_btn = document.querySelector(".reset_btn");
reset_btn.addEventListener("click", () => {
    location.reload();
});

/*--------- timer start --------- */
let start_timer = () => {
    const timer_box = document.querySelector(".timer_box");
    timer_box.innerHTML = "";
    timer_box.classList.add("display");
    let count = 0;
    setInterval(() => {
        count++;
        timer_box.innerHTML = count;
    }, 1000);

    setTimeout(() => {
        submit_func();
    }, 5 * 60 * 1000);
}  
/*--------- timer end --------- */ 