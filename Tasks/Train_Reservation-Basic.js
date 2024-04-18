class RailwayForm {
    constructor(givenname, trainno, address) {
        console.log("Constructor Is Called..." + givenname + " " + trainno)
        this.name = givenname;
        this.trainno = trainno;
        this.address = address;
    }

    preview() {
        console.log(this.name + ": Your Form Is For Train Number: " + this.trainno + "\nYour Address Is " + this.address);
    }

    submit() {
        console.log(this.name + ": Your Form Is Submitted For Train Number: " + this.trainno);
    }

    cancel() {
        console.log(this.name + ": This Form Is Cancelled For Train Number: " + this.trainno);
        this.trainno = 0;
    }
}

let praabindhForm = new RailwayForm("Praabindh", 13488, "10-A, Pallikaranai, Chennai - 600100");
praabindhForm.preview();
praabindhForm.submit();
praabindhForm.cancel();
praabindhForm.preview();

let praabindhForm2 = new RailwayForm("Praabindh", 28974, "10-A, Pallikaranai, Chennai - 600100");
praabindhForm2.preview();
praabindhForm2.submit();
praabindhForm2.preview();