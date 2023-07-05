const add = (event) => {
    event.preventDefault();
    var age = document.getElementById('age').value;
    if (age < 18) {
        throw new Error('NOT FOR VOTING');
    }
    else {
        console.log('VOTE NOW');
    }

    try {
        if (age < 18) {
            throw new Error('NOT FOR VOTEING');
        }
        else {
            console.log('ABLE TO VOTE');
        }

    } catch (err) {
        console.error(err);
    }
    finally {
        console.log('FINAL BLOCK');
    }
}