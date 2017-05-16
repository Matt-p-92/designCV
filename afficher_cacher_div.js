<script type="text/javascript">
    function afficher_cacher(id)
    {
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('bouton_'+id).innerHTML='Hide the contact details';
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('bouton_'+id).innerHTML='Show the contact details';
    }
    return true;
}
    </script>