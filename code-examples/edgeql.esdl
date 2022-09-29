module default {

    scalar type Result extending enum<Won, Lost, Tie>;

    type Pokemon {
        required property name -> str;
        required property description -> str;
        property height -> int64;
        property weight() -> int64;
    }

    type Battle {
        property result -> Result;
        required link contender -> Pokemon;
        required link opponent -> Pokemon;
    }
}

with friends := (
  select User filter .id in array_unpack(<array<uuid>>$friend_ids)
)
insert User {
  name := <str>$name,
  friends := friends,
};

select uuid_generate_v1mc(this);
select <str>$var;
select <int64>$a + <int64>$b;
select BlogPost filter .id = <uuid>$blog_id;
scalar type Color extending enum<Red, Green, Blue>;
select <datetime>'1999-03-31T15:17:00Z';
select <datetime>'1999-03-31T15:17:00Z';
select <cal::relative_duration>'15 milliseconds';
select (1 + 1) * 2 / (3 + 8);
select true
select <float32>123.456;
select <cal::date_duration>'5 days';
select range(<int64>{}, <int64>{});
select to_json('{"a": 2, "b": 5}');
select {1, 1234.5678n};
select b'bina\\x01ry';
select rb'hello\nthere';
select (fruit := 'Apple', quantity := 3.14, fresh := true);
select range(1, 10);
select <str>{} ?? 'default';
select Media[is TVShow];
select {'aaa', 'bbb'} ++ {'ccc', 'ddd'};
select BlogPost.title; # all blog post titles
select User.<author[is BlogPost]; # returns all blog posts
select <tuple<str, float64, bigint>>(1, 2, 3);
select User.<author[is Comment]; # returns all comments
select BlogPost.author.email; # all author emails
select User.friends.email; # all friends' emails
