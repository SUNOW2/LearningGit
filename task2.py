import common
futex_file = open("futex.c", 'r')
source_orig_lines = futex_file.read()
futex_file.close();

norm_lines = []

for c in common.c_regex.finditer(source_orig_lines):
    if c.group('noncomment'):
        norm_lines.append(c.group('noncomment'))

source = ''.join(norm_lines)
source_norm_lines = source.lower()

source_norm_str = common.whitespaces_regex.sub("", source_norm_lines)
source_norm = [i.strip() for i in source_norm_str.split()]
print(source_norm_str)