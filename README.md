# Convert Markdown to HTML and TeX to SVG

`TeX`数式をSVG化しながら、`Markdown`を`HTML`化するもの。

## How to use

1. start containers

```bash
$ docker-compose up -d
```

2. execute bash in `converter` container

```bash
$ docker-compose exec converter /bin/bash
```

3. excute `main.py` in the container

```bash
$ python main.py
```

`Sample.md` will be converted to `Sample.html`


## Implementation


There are 2 `docker` containers, `converter` and `node_svg`.

`converter` container has python environment. It use a python module named `md_pareser` to convert `Markdown` language to `HTML` except for converting `TeX` equation. The `md_pareser` module uses [Python-Markdown](https://pypi.org/project/Markdown/).

`node_svg` container has node environment. It convert `TeX` equation to SVG. It use [mathjax-node](https://github.com/mathjax/MathJax-node).

## issue

- `docker`を使うのではなく、単純なPythonモジュールにできなかったのか
- コンテナを1つにまとめられるのではないか
- ホストとの共有ボリュームにPythonのソースを置くのは良くない気がする
- ホストとの共有ボリュームに`.md`ファイルを置いて変換するのも良くない