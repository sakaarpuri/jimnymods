"""Rebuild web assets without saving over the editable Blender masters.

Blender --background --python modeling/export-web-model.py [-- --three-door]
Then run scripts/optimize-model.mjs and scripts/strip-unused-uv.mjs.
"""
from pathlib import Path

source = Path(__file__).resolve().with_name('build_jimny.py')
code = source.read_text().split('# Native editable project contains')[0]
exec(compile(code, str(source), 'exec'), {
    '__file__': str(source), '__name__': '__main__',
})
