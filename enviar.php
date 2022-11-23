<?php

function redirect($x) {
		echo "<script>window.top.location.href = '".$x."'</script>";

}

function alert($x) {
		echo "<script>alert('".utf8_decode($x)."');</script>";
}

date_default_timezone_set('America/Sao_Paulo');
$now = date('d/m/Y H:i:s (T)');

    //dados do formulario
    $nome = utf8_decode($_POST['nome']);
	$email = $_POST['email'];
	$msg = utf8_decode($_POST['msg']);

	//dados do email
	$subject = utf8_encode("Novo contato - MHC Advogados");
	$body = utf8_encode('<table align="center"  border="0" width="50%" style="border:solid 2px #8B8B8B;">
        <tr bgcolor="#000000">
        	<td colspan="2" align="center" style="font-family:Arial; font-size:16px ;background:#8B8B8B; color:#F8F8F8; font-weight:bold; line-height:50px">
				Contato atrav&eacute;s do site
            </td>
        </tr>
        <tr>
        	<td colspan="2" align="center" style="font-family:Arial; font-size:16px">&nbsp;</td>
        </tr>
        <tr>
        	<td width="100%" align="center" style="font-family:Arial; font-size:16px; color: #8B8B8B;">
            	<strong>Nome:</strong>
            </td>
        </tr>
        <tr>
            <td align="center" style="font-family:Arial; font-size:16px; color: #3D3D3D;">

            	'.utf8_decode($_POST['nome']).'
            </td>
        </tr>
        <tr>
        	<td colspan="2" align="center" style="font-family:Arial; font-size:16px">&nbsp;</td>
        </tr>
        <tr>
        	<td align="center" style="font-family:Arial; font-size:16px; text-decoration:none; color: #8B8B8B;">
            	<strong>E-mail:</strong>
            </td>
        </tr>
        <tr> 
            <td align="center" style="font-family:Arial; font-size:16px; color:#82777B; text-decoration:none; color: #3D3D3D;">
            	'.$_POST['email'].'
            </td>
       </tr>
       <tr>
        	<td colspan="2" align="center" style="font-family:Arial; font-size:16px">&nbsp;</td>
        </tr>
        <tr>
        	<td align="center" style="font-family:Arial; font-size:16px; text-decoration:none; color: #8B8B8B;">
            	<strong>Mensagem:</strong>
            </td>
        </tr>
        <tr> 
            <td align="center" style="font-family:Arial; font-size:16px; color:#82777B; text-decoration:none; color: #3D3D3D;">
            	'.utf8_decode($_POST['nome']).'
            </td>
       </tr>
        <tr>
        	<td colspan="2" align="center" style="font-family:Arial; font-size:16px">&nbsp;</td>
        </tr>

</table>');


	//inclui a biblioteca
	require_once("phpmailer/PHPMailerAutoload.php");
	
	//configuracoes de email
	$mail = new PHPMailer;

	$mail->Host='empregosnainternet.com.br';
	$mail->SMTPAuth = true;
	$mail->Username='folder';
	//$mail->Password='cfcd378b6';
	$mail->Password='c6x-o5u-7hq-w3g';
	$mail->SMTPSecure = 'tls';
	$mail->Port = 587;
	
	$mail->smtpConnect(
		array(
			"ssl" => array(
				"verify_peer" => false,
				"verify_peer_name" => false,
				"allow_self_signed" => true
			)
		)
	);

	$mail->setFrom($email, $nome);

	$mail->isHTML(true);                                // Set email format to HTML
	
	
	$to = 'formulariocaptcha@gmail.com';

	$mail->Subject = $subject;

	$mail->Body    = utf8_decode($body);

	$mail->addAddress($to);     // Add a recipient


	if($mail->send()) {
		alert('Mensagem enviada com sucesso!');

	} else {
		alert('Erro ao enviar mensagem. Verifique a validade de seu email.');
	}

	redirect('index.html');

?>
