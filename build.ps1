./node_modules/.bin/vite build
if (!$?)
{
    Write-Error 'vite build fail!'
    exit 1
}

docker build . -t reader_front
if (!$?)
{
    Write-Error 'docker build fail!'
    exit 1
}

docker image save reader_front -o docker/reader_front.image
if (!$?)
{
    Write-Error 'docker image save fail'
    exit 1
}
