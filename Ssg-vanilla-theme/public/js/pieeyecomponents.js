window.addEventListener("load", () => {
    Formio.createForm(
        document.getElementById("form"),
        {
            _id: document.querySelector("input[name=uuid]").value,
            title: "Data Subject Request",
            name: document.querySelector("input[name=uuid_name]").value,
            display: "form",
            type: "form",
            components: JSON.parse(document.querySelector("input[name=formConfig]").value),
            settings: {
                recaptcha: {
                    isEnabled: "true",
                    siteKey: document.querySelector("input[name=recaptcha_sitekey]").value,
                },
            },
        },
        {
            disableAlerts: true,
            noAlerts: true,
            language: "en",
            i18n: JSON.parse(document.querySelector("input[name=i18n_data]").value),
        }
    )
        .then((form) => {
            // Prevent the submission from going to the form.io server.
            /*form.nosubmit = true;
            // Triggered when they click the submit button.
            form.on("submit", (submission) => {
                submission.extensions = {
                    XAPIKEY,
                    PIIAIKEY,
                };
                const urlParams = new URLSearchParams(window.location.search);
                const dsrDryRun = urlParams.get('dryRun');
                if (dsrDryRun) {
                    submission['data']['dsrDryRun'] = dsrDryRun;
                }
                submission['data']['email'] = submission['data']['email'].toLowerCase();
                return fetch("https://dsrp-api.dev.pii.ai/r/submit", {
                    body: JSON.stringify(submission),
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": XAPIKEY,
                    },
                    redirect: "follow",
                    method: "POST",
                    mode: "cors",
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        submission.response = responseData;
                        form.emit("submitDone", submission);
                    });
            });
            return form;*/
        })
        .then((form) => {
            window.setLanguage = function (lang) {
                form.language = lang;
            };
            $('.card').css('background-color' , 'transparent');
            return form;
        })
        .then((form) => {
            // What to do when the submit begins.
            /*form.on("submitDone", (submission) => {
                let params = "";
                try {
                    params = `?id=${submission.response.SendMessageResponse.SendMessageResult.MessageId}`;
                } catch (e) {
                }
                window.location = `thanks.html${params}`;
            });
            return form;*/
        });
});

$( document ).ready(function() {   
    var config_data = JSON.parse(document.querySelector("input[name=config_data]").value);
    $('body').css('background-color' , config_data.color.backgroundcolor);
    $('body').css('font-family' , config_data.font.bodyFontFamily);
    $('body').css('color' , config_data.color.fontcolor);
    $('#nav-border').css('background-color' , config_data.color.headerBackground);    
    $('#nav').css('color' , config_data.color.navText);
    $('#footer').css('background-color' , config_data.color.footerBackground);
    $('#footer > div').css('color' , config_data.color.footerText);
    $("#logo").attr("src", config_data.contents.logoUrl);
    $("#footer > div").append(config_data.contents.footerText);
    $(".bi-envelope-open").attr("fill", config_data.color.fontcolor);
    $('.odd').css('background-color' , 'transparent');     
    if(config_data.contents.hideFooter === true)
    {
        $('#footer').hide();
    }
    if(config_data.contents.hideMenu === true)
    {
        $('#nav-border').hide();
    }

});
