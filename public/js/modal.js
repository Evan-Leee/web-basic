$(document).ready(function () {
    $('button').on('click', function () {
        if ($('#class').val() === '') {
            $('#class-modal').modal('show');
            return;
        }
        if ($('#name').val() === '') {
            $('#name-modal').modal('show');
            return;
        }
        if ($('#stu_no').val() === '') {
            $('#stu_modal').modal('show');
            return;
        }

        $('form').submit();

    });
});
