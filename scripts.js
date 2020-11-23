$(document).ready(function (){

    var formRules =
        {
            salary:
                {
                    required: true,
                    min: 0
                },
            credit:
                {
                    required: true,
                    min: 300,
                    max: 850
                },
            months:
                {
                    required: true,
                    min: 0
                }
        };
    var formMessages =
        {
            salary:
                {
                    required: "Please enter a Salary.",
                    min: "Salary must be a positive number.",
                },
            credit:
                {
                    required: "Please enter a Credit Score",
                    min: "Please enter a valid Credit Score. (300 - 850)",
                    max: "Please enter a valid Credit Score. (300 - 850)"
                },
            months:
                {
                    required: "Please enter number of Months.",
                    min: "Please enter a valid number for Months. (1+)"
                }
        };

    $("#loanApprovalForm").validate(
        {
            submitHandler: loanApproval,
            rules: formRules,
            messages: formMessages,
            errorElement : 'textarea',
            errorLabelContainer: '.errorsField'

        }
    );

    function loanApproval()
    {
        var salary = $("#salary").val();
        var credit = $("#credit").val();
        var monthsAtJob = $("#months").val();
        var loanStatus = "";

        if(salary >= 40000)
        {
            if(credit >= 600)
            {
                loanStatus = "Approved";
            }
            else
            {
                if(monthsAtJob > 12)
                {
                    loanStatus = "Approved";
                }
                else
                {
                    loanStatus = "Denied";
                }
            }
        }
        else
        {
            if(credit >= 600)
            {
                if(monthsAtJob > 12)
                {
                    loanStatus = "Approved";
                }
                else
                {
                    loanStatus = "Denied";
                }
            }
            else
            {
                loanStatus = "Denied";
            }
        }
        $("#loanOutput").append(`Status: ${loanStatus}`);
    }
});

