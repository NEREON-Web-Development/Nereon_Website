# FTP deployment script for NEREON website
$ftpServer = "ftp://nereon.gr/httpdocs/"
$user = "nereo_652972"
$pass = "zX2!b@2rq"
$localFolder = "C:\\NBF\\Nereon_Website\\dist"


# Create FTP directory function
function Ensure-FtpDirectory($remoteDir) {
    $ftp = [System.Net.FtpWebRequest]::Create($remoteDir)
    $ftp.Credentials = New-Object System.Net.NetworkCredential($user, $pass)
    $ftp.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
    $ftp.UseBinary = $true
    $ftp.KeepAlive = $false
    try {
        $ftp.GetResponse() | Out-Null
    } catch {}
}

# Create FTP request function
function Upload-ToFtp($localFile, $remoteFile) {
    $ftp = [System.Net.FtpWebRequest]::Create($remoteFile)
    $ftp.Credentials = New-Object System.Net.NetworkCredential($user, $pass)
    $ftp.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
    $ftp.UseBinary = $true
    $ftp.KeepAlive = $false
    $content = [System.IO.File]::ReadAllBytes($localFile)
    $ftp.ContentLength = $content.Length
    $requestStream = $ftp.GetRequestStream()
    $requestStream.Write($content, 0, $content.Length)
    $requestStream.Close()
}

# Upload all files in dist folder recursively
Get-ChildItem -Path $localFolder -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Substring($localFolder.Length + 1).Replace("\\", "/")
    $remoteFile = $ftpServer + $relativePath
    $remoteDir = $remoteFile.Substring(0, $remoteFile.LastIndexOf("/"))
    Ensure-FtpDirectory $remoteDir
    Write-Host "Uploading $($_.FullName) to $remoteFile"
    Upload-ToFtp $_.FullName $remoteFile
}