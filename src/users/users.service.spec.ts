import { anyOfClass, deepEqual, mock, verify, when } from 'ts-mockito';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    service = mock(UsersService);
  });

  service = new UsersService()
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
