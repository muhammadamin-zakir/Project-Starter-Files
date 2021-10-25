# @import

# SCSS SYNTAX

# önrek olarak 2 adet foundation klasöründeki 2 adet scss dosyaları!
// foundation/_code.scss
code {
  padding: .25em;
  line-height: 0;
}

# 2 files

// foundation/_lists.scss
ul, ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}


# @import aşağıdaki gibi! #

# istediğimiz dosya içerisinde direkt olarak @import olarak dahil edebiliyoruz. Çok fazla scss dosyamız olduğunda ise bunları tek tek yapmak hiç mantıklı olmayacağından bu yöntem artık kullanılmıyor!
// style.scss
**@import 'foundation/code', 'foundation/lists';**

#####################################################################

# @use #

# SCSS SYNTAX

# önrek olarak: aynı klasör içerisinde bulunan 2 scss dosyasını birbirlerine bağlamak için kullanılabilir.
// foundation/_code.scss
code {
  padding: .25em;
  line-height: 0;
}

# 2 files

// foundation/_lists.scss
ul, ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}

# @use aşağıdaki gibi! #



// style.scss
@use "code";
@use "lists";

# şeklinde birbirleri içerisinde kullanılabilir (örnek: codoe.$font-size gibi)
# ya da @use "code" as x; x.$font-size;


#####################################################################

# forward #

# burada ise 2 bir src kalsöründeki scss özellikleri tek bir index.scss dosyasından dışarı kullanımına açılır.

# @forward "../src/list";
# daha sonra bunu bizim ana dosyamız olan style.scss içerisinde kullanmak için
# şöye bir tanım gerekir: @use "src/list";
# bunuda kullanmak için list.$font-size; diyerek ya da tanımı yaparken @use "src/list" as x; x.$font-size; diyerek kullanabiliriz!

SCSS SYNTAX
// src/_list.scss
@mixin list-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}

# 2 files

// bootstrap.scss
@forward "src/list";

# @forward aşağıdaki gibi! #

// styles.scss
@use "bootstrap";

li {
  @include bootstrap.list-reset;
}

-https://sass-lang.com/documentation/at-rules/use
-https://sass-lang.com/documentation/at-rules/forward
-https://sass-lang.com/documentation/at-rules/import