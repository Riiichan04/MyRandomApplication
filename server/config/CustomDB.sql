create database RandomAppDB
go
use RandomAppDB
go




/* About ACCOUNT table */
create table ACCOUNT(
	ID varchar(100) primary key,
	Username varchar(200) NOT NULL,
	Nickname Nvarchar(500),
	Email NVarchar(500),
	Passwd varchar(32) NOT NULL,
)
go

create or alter proc createAccount @Username varchar(200), @Nickname Nvarchar(500), @Email Nvarchar(500), @Passwd varchar(32), @NewUserId varchar(100) output
as
begin
	declare @id int
	select @id = count(*) from ACCOUNT
	insert into ACCOUNT
	values (convert(varchar(100), @id), @Username, @Nickname, @Email, @Passwd)

	select @NewUserId = CONVERT(varchar(100), @id)
	return
end
go

create or alter trigger checkNewAccount
on ACCOUNT after insert
as
	if exists (
		select ACCOUNT.Username
		from inserted join ACCOUNT on (inserted.Username = ACCOUNT.Username OR inserted.Email = ACCOUNT.Email) AND inserted.ID <> ACCOUNT.ID
	)
	begin
		raiserror('Cant do it', 16, 1)
		rollback
	end
go






/* About Note table */
create table NOTE(
	NoteID varchar(100) primary key,
	ID varchar(100) NOT NULL,
	Content Nvarchar(max) NOT NULL,
	Uploadtime smalldatetime NOT NULL,
)

create table NOTE_ATTACHMENT(
	AttachmentID varchar(100) primary key,
	NoteID varchar(100),
	Attachmenturl varchar(1000) NOT NULL,
)
go

/* Foreign key */
alter table NOTE_ATTACHMENT
add constraint NoteID_FK 
foreign key (NoteID) references NOTE(NoteID)
go

create proc addNote @ID varchar(100), @Content NVarchar(4000), @Uploadtime smalldatetime
as
begin
	declare @noteid int
	select @noteid = count(*) from NOTE
	insert into NOTE
	values (convert(varchar(100), @noteid), @ID, @Content, @Uploadtime)
end
go

create function getLastedNote (@ID varchar(100))
returns varchar(100)
as
begin 
	declare @result varchar(100)
	select @result = max(Uploadtime)
	from NOTE
	group by ID
	having ID = @ID
	return @result
end
go

create proc addNoteAttachment @NoteID varchar(100), @Attachmenturl varchar(1000)
as
begin
	declare @attachmentid int
	select @attachmentid = count(*) from NOTE_ATTACHMENT
	insert into NOTE_ATTACHMENT
	values (convert(varchar(100), @noteid), @NoteID, @Attachmenturl)
end
go

create trigger checkNoteAttachment
on NOTE_ATTACHMENT after insert
as
	if not exists (
		select *
		from inserted join NOTE on NOTE.NoteID = inserted.NoteID
	)
	begin 
		raiserror('Cant add attachment', 16, 1)
		rollback
	end
go





/* About News Table */
create table NEWS(
	NewsID varchar(100) primary key,
	Title Nvarchar(1000) NOT NULL,
	Content Nvarchar(max) NOT NULL,
	ThumbnailUrl Nvarchar(4000) NOT NULL,
	Uploadtime smalldatetime NOT NULL,
	HotNews bit NOT NULL,
)

create table IMAGES(
	ImageID varchar(100) primary key,
	Title NVarchar(4000),
	ImageUrl NVarchar(4000) NOT NULL
)
go

create or alter proc addNews @Title Nvarchar(1000), @Content Nvarchar(max), @ThumbnailUrl Nvarchar(4000), @Uploadtime smalldatetime,  @HotNews bit
as
begin
	declare @newsid int
	select @newsid = count(*) from NEWS
	insert into NEWS
	values (CONVERT(varchar(100), @newsid), @Title, @Content, @ThumbnailUrl, @Uploadtime, @HotNews)
end
go

create or alter proc addImage @Title NVarchar(4000), @Imageurl NVarchar(4000), @Uploadtime smalldatetime
as
begin
	declare @imgid int
	select @imgid = count(*) from IMAGES
	insert into IMAGES
	values (convert(varchar(100), @imgid), @Title, @Imageurl, @Uploadtime)
end
go
